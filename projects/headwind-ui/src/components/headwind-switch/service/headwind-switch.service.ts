import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeadwindSwitchService {
  checked$ = new BehaviorSubject(false);

  get checked(): boolean {
    return this.checked$.value;
  }

  set checked(value: boolean) {
    this.checked$.next(value);
  }
}
