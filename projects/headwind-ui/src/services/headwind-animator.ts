import { Injectable } from '@angular/core';

export type HeadwindAnimatorListener = () => void;

@Injectable({
  providedIn: 'root',
})
export class HeadwindAnimator {
  private _frame: any;
  private _animating = false;
  private _registeredListeners: HeadwindAnimatorListener[] = [];

  get hasListeners(): boolean {
    return this._registeredListeners.length > 0;
  }

  addListener(listener: HeadwindAnimatorListener): void {
    this.removeListener(listener); // remove duplicated one
    this._registeredListeners.push(listener);

    if (this.hasListeners && !this._animating) {
      this._animating = true;
      this._runAnimation();
    }
  }

  removeListener(listener: HeadwindAnimatorListener): void {
    this._registeredListeners = this._registeredListeners.filter((item) => item !== listener);

    if (!this.hasListeners) {
      this._stopAnimation();
    }
  }

  private _runAnimation(): void {
    this._registeredListeners.forEach((listener) => listener());

    if (this._animating) {
      this._frame = requestAnimationFrame(() => this._runAnimation());
    }
  }

  private _stopAnimation(): void {
    cancelAnimationFrame(this._frame);
    this._animating = false;
  }
}
