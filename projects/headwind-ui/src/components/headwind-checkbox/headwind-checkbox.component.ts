import { booleanAttribute, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { HeadwindControlValueAccessor } from '../../abstracts/headwind-control-value-accessor';
import { HeadwindClickDetector } from '../../services/headwind-click-detector.service';
import { HeadwindCheckboxService } from './service/headwind-checkbox.service';

@Component({
  selector: 'headwind-checkbox',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './headwind-checkbox.component.html',
  styleUrl: './headwind-checkbox.component.scss',
  providers: [HeadwindClickDetector, HeadwindCheckboxService],
  host: {
    tabindex: '0',
    class: 'headwind-checkbox',
    role: 'checkbox',
    ['[attr.aria-checked]']: 'checked',
  },
})
export class HeadwindCheckboxComponent extends HeadwindControlValueAccessor {
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(private readonly _headwindCheckboxService: HeadwindCheckboxService) {
    super();
  }

  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this.isDisabled;
  }

  set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  @Input({ transform: booleanAttribute })
  get checked(): boolean {
    return this._headwindCheckboxService.checked;
  }

  set checked(value: boolean) {
    this._headwindCheckboxService.checked = value;
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
