import { Component, DestroyRef, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { HeadwindSelectService } from '../../service/headwind-select.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'headwind-option',
  standalone: true,
  imports: [],
  templateUrl: './headwind-option.component.html',
  styleUrl: './headwind-option.component.scss',
  host: {
    class: 'headwind-option',
    role: 'option',
    ['[class.headwind-focused]']: 'focused',
    ['[class.headwind-selected]']: 'selected',
  },
})
export class HeadwindOptionComponent implements OnInit {
  /** Value of option to apply to select */
  @Input({ required: true }) value: any;

  constructor(
    private readonly _destroyRef: DestroyRef,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _headwindSelectService: HeadwindSelectService,
  ) {
    this._headwindSelectService.focusOption.pipe(takeUntilDestroyed()).subscribe((value) => {
      this._focused = this.value === value;
    });

    this._headwindSelectService.hoverOption.pipe(takeUntilDestroyed()).subscribe(() => {
      this._focused = false;
    });
  }

  private _focused = false;

  get focused(): boolean {
    return this._focused;
  }

  private _selected = false;

  get selected(): boolean {
    return this._selected;
  }

  private _label?: string;

  /** Get displayable label. When label isn't set, it returns textContent of host element */
  get label(): string {
    return this._label || this._elementRef?.nativeElement.textContent || '';
  }

  /**
   * Set label to display when option is selected
   * @param value - Label value
   */
  @Input()
  set label(value: string) {
    this._label = value;
  }

  ngOnInit() {
    // subscribe after init to wait 'value' input
    combineLatest([this._headwindSelectService.multiple$, this._headwindSelectService.value$])
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(([multiple, value]) => {
        if (multiple) {
          this._selected = (value || []).includes(this.value);
        } else {
          this._selected = value === this.value;
        }
      });
  }

  @HostListener('click')
  onHostClick(): void {
    this._headwindSelectService.selectOption.emit(this.value);
  }

  @HostListener('mouseenter')
  onHostMouseEnter(): void {
    this._headwindSelectService.hoverOption.emit();
  }

  focus(): void {
    this._headwindSelectService.focusOption.emit(this.value);
  }

  getBoundingClientRect(): DOMRect | undefined {
    return this._elementRef?.nativeElement.getBoundingClientRect();
  }
}
