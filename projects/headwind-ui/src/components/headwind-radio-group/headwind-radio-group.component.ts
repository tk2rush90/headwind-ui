import {
  booleanAttribute,
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { HeadwindControlValueAccessor } from '../../abstracts/headwind-control-value-accessor';
import { HeadwindRadioComponent } from './headwind-radio/headwind-radio.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeadwindRadioGroupService } from './service/headwind-radio-group.service';

@Component({
  selector: 'headwind-radio-group',
  standalone: true,
  imports: [],
  templateUrl: './headwind-radio-group.component.html',
  styleUrl: './headwind-radio-group.component.scss',
  host: {
    tabindex: '0',
    class: 'headwind-radio-group',
  },
  providers: [HeadwindRadioGroupService],
})
export class HeadwindRadioGroupComponent extends HeadwindControlValueAccessor {
  @Output() valueChange = new EventEmitter<any>();

  @ContentChildren(HeadwindRadioComponent, { descendants: true }) radioList?: QueryList<HeadwindRadioComponent>;

  constructor(private readonly _headwindRadioGroupService: HeadwindRadioGroupService) {
    super();

    this._headwindRadioGroupService.selectOption.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.updateValue(value);
    });
  }

  get value(): any {
    return this._headwindRadioGroupService.value;
  }

  @Input()
  set value(value: any) {
    this._headwindRadioGroupService.value = value;
  }

  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this.isDisabled;
  }

  set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  @HostListener('blur')
  onHostBlur(): void {
    this.onTouched();
  }

  @HostListener('keydown.arrowUp', ['$event'])
  onHostArrowUpKeydown(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.toPreviousOption();
  }

  @HostListener('keydown.arrowDown', ['$event'])
  onHostArrowDownKeydown(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.toNextOption();
  }

  @HostListener('keydown.arrowLeft', ['$event'])
  onHostArrowLeftKeydown(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.toPreviousOption();
  }

  @HostListener('keydown.arrowRight', ['$event'])
  onHostArrowRightKeydown(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.toNextOption();
  }

  override updateValue(value: any) {
    super.updateValue(value);
    this.valueChange.emit(value);
  }

  override writeValue(obj: any) {
    this.value = obj;
  }

  toPreviousOption(): void {
    if (!this.disabled) {
      const currentOptionIndex = this._findIndexOfSelectedRadio();
      const previousOptionIndex = Math.max(currentOptionIndex - 1, 0);

      const previousOption = this.radioList?.get(previousOptionIndex);

      if (previousOption) {
        this.updateValue(previousOption.value);
      }
    }
  }

  toNextOption(): void {
    if (!this.disabled) {
      const currentOptionIndex = this._findIndexOfSelectedRadio();
      const lastOptionIndex = (this.radioList?.length || 0) - 1;
      const nextOptionIndex = Math.min(currentOptionIndex + 1, lastOptionIndex);

      const nextOption = this.radioList?.get(nextOptionIndex);

      if (nextOption) {
        this.updateValue(nextOption.value);
      }
    }
  }

  private _findIndexOfSelectedRadio(): number {
    let searchedIndex = -1;

    this.radioList?.some((radio, index) => {
      if (radio.selected) {
        searchedIndex = index;
      }

      return radio.selected;
    });

    return searchedIndex;
  }
}
