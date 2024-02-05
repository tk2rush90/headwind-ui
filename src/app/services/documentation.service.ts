import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DocHeadingNavigationItem } from '../pages/doc-page/doc-heading-navigator/doc-heading-navigator.component';

@Injectable()
export class DocumentationService {
  version$ = new BehaviorSubject('');
  headingNavigations$ = new BehaviorSubject<DocHeadingNavigationItem[]>([]);

  get version(): string {
    return this.version$.value;
  }

  set version(value: string) {
    this.version$.next(value);
  }

  get headingNavigations(): DocHeadingNavigationItem[] {
    return this.headingNavigations$.value;
  }

  set headingNavigations(value: DocHeadingNavigationItem[]) {
    this.headingNavigations$.next(value);
  }
}
