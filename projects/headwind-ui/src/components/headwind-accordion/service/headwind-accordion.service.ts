import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeadwindAccordionService {
  /** Emits to toggle opened status */
  toggleOpened = new EventEmitter<void>();

  opened$ = new BehaviorSubject(false);

  get opened(): boolean {
    return this.opened$.value;
  }

  set opened(value: boolean) {
    this.opened$.next(value);
  }
}
