import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeadwindTabGroupService {
  /** Current activated tab key */
  tab$ = new BehaviorSubject<any>(undefined);

  get tab(): any {
    return this.tab$.value;
  }

  set tab(value: any) {
    this.tab$.next(value);
  }
}
