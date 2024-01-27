import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HeadwindPlatformService {
  constructor(@Inject(PLATFORM_ID) private readonly _platformId: Object) {}

  get isBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }
}
