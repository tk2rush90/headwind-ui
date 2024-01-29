import { booleanAttribute, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { HeadwindSwitchService } from './service/headwind-switch.service';
import { HeadwindControlValueAccessor } from '../../abstracts/headwind-control-value-accessor';

@Component({
  selector: 'headwind-switch',
  standalone: true,
  imports: [],
  templateUrl: './headwind-switch.component.html',
  styleUrl: './headwind-switch.component.scss',
  host: {
    tabindex: '0',
    class: 'headwind-switch',
    role: 'switch',
    ['[attr.aria-checked]']: 'checked',
    ['[class.headwind-checked]']: 'checked',
  },
})
export class HeadwindSwitchComponent extends HeadwindControlValueAccessor {
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(private readonly _headwindSwitchService: HeadwindSwitchService) {
    super();
  }

  @Input({ transform: booleanAttribute })
  get checked(): boolean {
    return this._headwindSwitchService.checked;
  }

  set checked(value: boolean) {
    this._headwindSwitchService.checked = value;
  }

  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this.isDisabled;
  }

  set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  @HostListener('click')
  onHostClick(): void {
    this.toggle();
  }

  @HostListener('blur')
  onHostBlur(): void {
    this.onTouched();
  }

  @HostListener('keydown.space', ['$event'])
  onHostSpaceKeydown(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.toggle();
  }

  override writeValue(obj: any) {
    this.checked = obj;
  }

  override updateValue(value: any) {
    super.updateValue(value);
    this.checkedChange.emit(value);
  }

  check(): void {
    if (this.disabled) {
      return;
    }

    this.updateValue(true);
  }

  uncheck(): void {
    if (this.disabled) {
      return;
    }

    this.updateValue(false);
  }

  toggle(): void {
    if (this.checked) {
      this.uncheck();
    } else {
      this.check();
    }
  }
}
