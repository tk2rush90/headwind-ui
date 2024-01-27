import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ElementRef, inject, Renderer2 } from '@angular/core';

export abstract class HeadwindControlValueAccessor implements ControlValueAccessor {
  isDisabled = false;

  private readonly _internalNgControl: NgControl | null;
  private readonly _internalRenderer: Renderer2;
  private readonly _internalElementRef: ElementRef<HTMLElement>;

  protected constructor() {
    this._internalNgControl = inject(NgControl, { optional: true });
    this._internalRenderer = inject(Renderer2);
    this._internalElementRef = inject(ElementRef);

    if (this._internalNgControl) {
      this._internalNgControl.valueAccessor = this;
    }
  }

  onChange = (value: any) => {};

  onTouched = () => {};

  abstract writeValue(obj: any): void;

  registerOnChange(fn = (value: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn = () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;

    if (isDisabled) {
      this._setAttribute('disabled');
    } else {
      this._removeAttribute('disabled');
    }
  }

  updateValue(value: any): void {
    this.onChange(value);
    this.writeValue(value);
  }

  private _setAttribute(name: string): void {
    this._internalRenderer.setAttribute(this._internalElementRef.nativeElement, name, '');
  }

  private _removeAttribute(name: string): void {
    this._internalRenderer.removeAttribute(this._internalElementRef.nativeElement, name);
  }
}
