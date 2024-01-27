import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeadwindRadioGroupService {
  /** Emits with value of option when selected */
  selectOption = new EventEmitter<any>();

  /** Selected value */
  value$ = new BehaviorSubject<any>(undefined);

  get value(): any {
    return this.value$.value;
  }

  set value(value: any) {
    this.value$.next(value);
  }
}
