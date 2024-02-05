import { Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeadwindQueryListService {
  findIndex<Comp>(queryList: QueryList<Comp> | undefined, comparator: (component: Comp) => boolean): number {
    let searchedIndex = -1;

    // To stop when searched, use 'some()' method
    queryList?.some((component, index) => {
      const result = comparator(component);

      if (result) {
        searchedIndex = index;
      }

      return result;
    });

    return searchedIndex;
  }
}
