import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeadwindPopoverService {
  /** Emits to open popover */
  openPopover = new EventEmitter<void>();

  /** Emits to close popover */
  closePopover = new EventEmitter<void>();

  /** Popover opened status */
  popoverOpened$ = new BehaviorSubject(false);

  get popoverOpened(): boolean {
    return this.popoverOpened$.value;
  }

  set popoverOpened(value: boolean) {
    this.popoverOpened$.next(value);
  }
}
