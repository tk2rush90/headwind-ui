import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeadwindSelectComponent } from '@favian/headwind-ui';

@Injectable()
export class HeadwindSelectService {
  static nextFocusingSelect$ = new BehaviorSubject<HeadwindSelectComponent | null>(null);

  /** Emits with value of option when selected */
  selectOption = new EventEmitter<any>();

  /** Emits with value of option when focused */
  focusOption = new EventEmitter<any>();

  /** Emits when option hovered */
  hoverOption = new EventEmitter<void>();

  /** Emits to close options */
  closeOptions = new EventEmitter<void>();

  /** Current value of select */
  value$ = new BehaviorSubject<any>(undefined);

  /** Multiple status */
  multiple$ = new BehaviorSubject(false);

  /** Options opened status */
  optionsOpened$ = new BehaviorSubject(false);

  get nextFocusingSelect(): HeadwindSelectComponent | null {
    return HeadwindSelectService.nextFocusingSelect$.value;
  }

  set nextFocusingSelect(value: HeadwindSelectComponent | null) {
    HeadwindSelectService.nextFocusingSelect$.next(value);
  }

  get value(): any {
    return this.value$.value;
  }

  set value(value: any) {
    this.value$.next(value);
  }

  get multiple(): boolean {
    return this.multiple$.value;
  }

  set multiple(value: boolean) {
    this.multiple$.next(value);
  }

  get optionsOpened(): boolean {
    return this.optionsOpened$.value;
  }

  set optionsOpened(value: boolean) {
    this.optionsOpened$.next(value);
  }
}
