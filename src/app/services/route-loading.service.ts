import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouteLoadingService {
  showLoading = new EventEmitter<void>();
  hideLoading = new EventEmitter<void>();

  startLoading(): void {
    this.showLoading.emit();
  }

  stopLoading(): void {
    this.hideLoading.emit();
  }
}
