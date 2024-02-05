import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  QueryList,
  Renderer2,
} from '@angular/core';
import { HeadwindOptionComponent } from './headwind-option/headwind-option.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeadwindClickDetector } from '../../../services/headwind-click-detector.service';
import { HeadwindWindowService } from '../../../services/headwind-window.service';
import { HeadwindPlatformService } from '../../../services/headwind-platform.service';
import { HeadwindSelectService } from '../service/headwind-select.service';
import { YDirections } from '../../../types/y-directions';
import { HeadwindQueryListService } from '../../../services/headwind-query-list.service';

@Component({
  selector: 'headwind-options-overlay',
  standalone: true,
  imports: [],
  templateUrl: './headwind-options-overlay.component.html',
  styleUrl: './headwind-options-overlay.component.scss',
  providers: [HeadwindClickDetector],
  host: {
    class: 'headwind-options-overlay',
    role: 'listbox',
  },
})
export class HeadwindOptionsOverlayComponent implements AfterContentInit {
  @Output() actualDirectionChange = new EventEmitter<YDirections>();

  @ContentChildren(HeadwindOptionComponent, { descendants: true })
  optionList?: QueryList<HeadwindOptionComponent>;

  private _focusedIndex = -1;

  constructor(
    private readonly _renderer: Renderer2,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _headwindWindowService: HeadwindWindowService,
    private readonly _headwindPlatformService: HeadwindPlatformService,
    private readonly _headwindClickDetector: HeadwindClickDetector,
    private readonly _headwindQueryListService: HeadwindQueryListService,
    private readonly _headwindSelectService: HeadwindSelectService,
  ) {
    this._headwindClickDetector.outsideClick.pipe(takeUntilDestroyed()).subscribe(() => {
      if (this._headwindSelectService.optionsOpened) {
        this._headwindSelectService.closeOptions.emit();
      }
    });

    this._headwindSelectService.focusOption.pipe(takeUntilDestroyed()).subscribe((value) => {
      this._focusedIndex = this.findOptionIndexByValue(value);
      this.scrollToOptionByValue(value);
    });

    this._headwindSelectService.hoverOption.pipe(takeUntilDestroyed()).subscribe(() => {
      this._focusedIndex = -1;
    });

    this._headwindSelectService.optionsOpened$.pipe(takeUntilDestroyed()).subscribe((opened) => {
      if (opened) {
        this._headwindClickDetector.register(this._elementRef.nativeElement);
      } else {
        this._headwindClickDetector.unregister();
      }
    });
  }

  get optionsLastIndex(): number {
    return this.optionList ? this.optionList.length - 1 : 0;
  }

  ngAfterContentInit() {
    this.focusToSelected();
    this.scrollToOptionByValue(this._headwindSelectService.value);
  }

  @HostListener('window:keydown.arrowUp', ['$event'])
  onWindowArrowUpKeydown(event: Event): void {
    if (!this._headwindSelectService.optionsOpened) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.focusToPrevious();
  }

  @HostListener('window:keydown.arrowDown', ['$event'])
  onWindowArrowDownKeydown(event: Event): void {
    if (!this._headwindSelectService.optionsOpened) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.focusToNext();
  }

  @HostListener('window:keydown.space', ['$event'])
  onWindowSpaceKeydown(event: Event): void {
    if (!this._headwindSelectService.optionsOpened) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.selectFocusedOption();

    if (!this._headwindSelectService.multiple) {
      this._headwindSelectService.closeOptions.emit();
    }
  }

  @HostListener('window:keydown.enter', ['$event'])
  onWindowEnterKeydown(event: Event): void {
    if (!this._headwindSelectService.optionsOpened) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.selectFocusedOption();

    if (!this._headwindSelectService.multiple) {
      this._headwindSelectService.closeOptions.emit();
    }
  }

  /** Focus to option that is equal to value */
  focusToSelected(): void {
    this._elementRef?.nativeElement.focus();

    const { multiple, value } = this._headwindSelectService;

    let targetOption: HeadwindOptionComponent | undefined;

    if (multiple) {
      targetOption = this.findOptionByValue(value[value.length - 1]);
    } else {
      targetOption = this.findOptionByValue(value);
    }

    if (!targetOption) {
      targetOption = this.optionList?.get(0);
    }

    targetOption?.focus();
  }

  focusToPrevious(): void {
    this.optionList?.get(Math.max(this._focusedIndex - 1, 0))?.focus();
  }

  focusToNext(): void {
    this.optionList?.get(Math.min(this._focusedIndex + 1, this.optionsLastIndex))?.focus();
  }

  selectFocusedOption(): void {
    const focusedOption = this.optionList?.get(this._focusedIndex);

    if (focusedOption) {
      this._headwindSelectService.selectOption.emit(focusedOption.value);
    }
  }

  findOptionByValue(value: any): HeadwindOptionComponent | undefined {
    return this.optionList?.get(this.findOptionIndexByValue(value));
  }

  findOptionIndexByValue(value: any): number {
    return this._headwindQueryListService.findIndex(this.optionList, (option) => option.value === value);
  }

  updatePosition(select: HTMLElement): void {
    if (this._headwindPlatformService.isBrowser && this._elementRef) {
      const options = this._elementRef.nativeElement;

      this._renderer.removeStyle(options, 'top');
      this._renderer.removeStyle(options, 'bottom');

      const selectDomRect = select.getBoundingClientRect();
      const optionsDomRect = options.getBoundingClientRect();

      this._renderer.setStyle(options, 'width', selectDomRect.width + 'px');
      this._renderer.setStyle(options, 'left', selectDomRect.left + 'px');

      if (this._headwindWindowService.isBottomSpaceAvailable(selectDomRect.bottom, optionsDomRect.height)) {
        this._renderer.setStyle(options, 'top', selectDomRect.bottom + 'px');
        this._emitActualDirectionBottom();
      } else if (this._headwindWindowService.isTopSpaceAvailable(selectDomRect.top, optionsDomRect.height)) {
        this._renderer.setStyle(options, 'bottom', `calc(100% - ${selectDomRect.top}px)`);
        this._emitActualDirectionTop();
      } else {
        this._renderer.setStyle(options, 'top', selectDomRect.bottom + 'px');
        this._emitActualDirectionBottom();
      }
    }
  }

  scrollToOptionByValue(value: any): void {
    const optionIndex = this.findOptionIndexByValue(value);
    const option = this.optionList?.get(optionIndex);
    const host = this._elementRef?.nativeElement;

    const optionDomRect = option?.getBoundingClientRect();
    const hostDomRect = host?.getBoundingClientRect();

    if (host && optionDomRect && hostDomRect) {
      const scrollTop = host.scrollTop;

      host.scrollTop =
        scrollTop + (optionDomRect.y - hostDomRect.y) - hostDomRect.height / 2 + optionDomRect.height / 2;
    }
  }

  private _emitActualDirectionTop(): void {
    this.actualDirectionChange.emit('top');
  }

  private _emitActualDirectionBottom(): void {
    this.actualDirectionChange.emit('bottom');
  }
}
