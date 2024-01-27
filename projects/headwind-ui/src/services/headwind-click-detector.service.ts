import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { HeadwindErrors } from '../constants/headwind-errors';
import { HeadwindPlatformService } from './headwind-platform.service';

@Injectable()
export class HeadwindClickDetector implements OnDestroy {
  outsideClick = new EventEmitter<void>();
  insideClick = new EventEmitter<void>();

  private _container?: Node;
  private _mouseDownDetectedFromOutside = false;
  private _mouseDownDetectedFromInside = false;

  constructor(private readonly _headwindPlatformService: HeadwindPlatformService) {}

  ngOnDestroy() {
    this.unregister();
  }

  register(container: Node): void {
    this._container = container;

    this._removeEventListeners();
    this._addEventListeners();
  }

  unregister(): void {
    delete this._container;

    this._removeEventListeners();
  }

  private _addEventListeners(): void {
    if (this._headwindPlatformService.isBrowser) {
      window.addEventListener('mousedown', this._windowMousedownListener);
      window.addEventListener('mouseup', this._windowMouseupListener);
    }
  }

  private _removeEventListeners(): void {
    if (this._headwindPlatformService.isBrowser) {
      window.removeEventListener('mousedown', this._windowMousedownListener);
      window.removeEventListener('mouseup', this._windowMouseupListener);
    }
  }

  private _windowMousedownListener = (event: Event) => {
    if (!this._container) {
      console.error(HeadwindErrors.headwindError0003);
      return;
    }

    this._mouseDownDetectedFromOutside = event.target instanceof Node && !this._container.contains(event.target);
    this._mouseDownDetectedFromInside = event.target instanceof Node && this._container.contains(event.target);
  };

  private _windowMouseupListener = (event: Event) => {
    if (!this._container) {
      console.error(HeadwindErrors.headwindError0003);
      return;
    }

    if (this._mouseDownDetectedFromOutside && event.target instanceof Node && !this._container.contains(event.target)) {
      this.outsideClick.emit();
    }

    if (this._mouseDownDetectedFromInside && event.target instanceof Node && this._container.contains(event.target)) {
      this.insideClick.emit();
    }
  };
}
