import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class HeadwindAccordionService {
  /** Emits to toggle opened status */
  toggleOpened = new EventEmitter<void>();
}
