import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ContentChild,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeadwindOverlayService } from '../../services/headwind-overlay.service';
import { HeadwindErrors } from '../../constants/headwind-errors';
import { HeadwindClickDetector } from '../../services/headwind-click-detector.service';
import { HeadwindControlValueAccessor } from '../../abstracts/headwind-control-value-accessor';
import { HeadwindAnimator } from '../../services/headwind-animator';
import { HeadwindSelectService } from './service/headwind-select.service';
import { HeadwindOptionsTemplateDirective } from './headwind-options-template/headwind-options-template.directive';
import { HeadwindOptionsComponent } from './headwind-options-template/headwind-options/headwind-options.component';

@Component({
  selector: 'headwind-select',
  standalone: true,
  imports: [],
  templateUrl: './headwind-select.component.html',
  styleUrl: './headwind-select.component.scss',
  exportAs: 'headwindSelect',
  host: {
    tabindex: '0',
    class: 'headwind-select',
    role: 'combobox',
    ['aria-haspopup']: 'listbox',
    ['[attr.aria-expanded]']: 'opened',
    ['[class.headwind-opened]']: 'opened',
  },
  providers: [HeadwindClickDetector, HeadwindSelectService],
})
export class HeadwindSelectComponent extends HeadwindControlValueAccessor implements AfterViewInit, OnDestroy {
  @Output() valueChange = new EventEmitter<any>();

  @ContentChild(HeadwindOptionsTemplateDirective, { descendants: true })
  optionsTemplate?: HeadwindOptionsTemplateDirective;

  @ContentChild(HeadwindOptionsComponent, { descendants: true }) options?: HeadwindOptionsComponent;

  private _optionsViewRef?: EmbeddedViewRef<any>;
  private _openTimeoutId?: any;
  private _closeTimeoutId?: any;

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _headwindOverlayService: HeadwindOverlayService,
    private readonly _headwindClickDetector: HeadwindClickDetector,
    private readonly _headwindAnimator: HeadwindAnimator,
    private readonly _headwindSelectService: HeadwindSelectService,
  ) {
    super();

    // options should be closed from the options component
    this._headwindSelectService.selectOption.pipe(takeUntilDestroyed()).subscribe((optionValue) => {
      if (this.multiple) {
        const { value } = this;

        if ((value as any[]).includes(optionValue)) {
          this.updateValue(value.filter((item: any) => item !== optionValue));
        } else {
          this.updateValue([...value, optionValue]);
        }
      } else {
        this.updateValue(optionValue);
        this.close();
      }
    });

    this._headwindSelectService.closeOptions.pipe(takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }

  @Input({ transform: booleanAttribute })
  get multiple(): boolean {
    return this._headwindSelectService.multiple;
  }

  set multiple(value: boolean) {
    this._headwindSelectService.multiple = value;
  }

  get value(): any {
    return this._headwindSelectService.value;
  }

  @Input()
  set value(value: any) {
    this._headwindSelectService.value = value;
  }

  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this.isDisabled;
  }

  set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  get opened(): boolean {
    return !!this._optionsViewRef;
  }

  ngAfterViewInit() {
    this._headwindClickDetector.register(this._elementRef.nativeElement);
  }

  ngOnDestroy() {
    clearTimeout(this._openTimeoutId);
    clearTimeout(this._closeTimeoutId);
  }

  override writeValue(obj: any) {
    this._headwindSelectService.value = obj;
  }

  override updateValue(value: any) {
    super.updateValue(value);
    this.valueChange.emit(value);
  }

  @HostListener('blur')
  onHostBlur(): void {
    this.onTouched();
  }

  @HostListener('click')
  onHostClick(): void {
    this.open();
  }

  @HostListener('keydown.enter', ['$event'])
  onHostEnterKeydown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.open();
  }

  @HostListener('keydown.arrowUp', ['$event'])
  onHostArrowUpKeydown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.open();
  }

  @HostListener('keydown.arrowDown', ['$event'])
  onHostArrowDownKeydown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.open();
  }

  focus(): void {
    this._elementRef.nativeElement.focus();
  }

  blur(): void {
    this._elementRef.nativeElement.blur();
  }

  open(): void {
    if (this.isDisabled || this._headwindSelectService.optionsOpened) {
      return;
    }

    if (!this.optionsTemplate) {
      console.error(HeadwindErrors.headwindError0001);
      return;
    }

    if (this._optionsViewRef) {
      // already opened
      return;
    }

    this._optionsViewRef = this._headwindOverlayService.open(this.optionsTemplate.templateRef);

    this._optionsViewRef.onDestroy(() => this._afterClosed()); // for outside click closing of options

    this._headwindAnimator.addListener(this._optionsPositionListener);

    this.blur();
    this._headwindSelectService.optionsOpened = true;

    clearTimeout(this._openTimeoutId);

    // timeout to wait until options rendered
    this._openTimeoutId = setTimeout(() => {
      if (!this.options) {
        console.error(HeadwindErrors.headwindError0002);
        return;
      }
    });
  }

  close(): void {
    this._optionsViewRef?.destroy();

    this._afterClosed();
  }

  private _afterClosed(): void {
    this.focus();

    clearTimeout(this._closeTimeoutId);

    // timeout to prevent re-opening options after closed
    this._closeTimeoutId = setTimeout(() => {
      this._headwindAnimator.removeListener(this._optionsPositionListener);
      this._headwindSelectService.optionsOpened = false;

      delete this._optionsViewRef;
    });
  }

  private _optionsPositionListener = () => {
    this.options?.updatePosition(this._elementRef.nativeElement);
  };
}
