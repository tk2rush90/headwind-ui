import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeadwindWindowService {
  /**
   * Returns whether there is space for an element at the bottom of the Window
   * @param y - Y-axis position of the top of the element
   * @param height - Height of the element
   */
  isBottomSpaceAvailable(y: number, height: number): boolean {
    return y + height < window.innerHeight;
  }

  /**
   * Returns whether there is space for an element at the top of the Window
   * @param y - Y-axis position of the bottom of the element
   * @param height - Height of the element
   */
  isTopSpaceAvailable(y: number, height: number): boolean {
    return y - height > 0;
  }

  isRightSpaceAvailable(x: number, width: number): boolean {
    return x + width < window.innerWidth;
  }

  isLeftSpaceAvailable(x: number, width: number): boolean {
    return x - width > 0;
  }
}
