import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { HeadwindSwitchComponent } from '../../../../../projects/headwind-ui/src/components/headwind-switch/headwind-switch.component';
import { HeadwindSwitchThumbComponent } from '../../../../../projects/headwind-ui/src/components/headwind-switch/headwind-switch-track/headwind-switch-thumb/headwind-switch-thumb.component';
import { HeadwindSwitchTrackComponent } from '../../../../../projects/headwind-ui/src/components/headwind-switch/headwind-switch-track/headwind-switch-track.component';
import { HeadwindPlatformService } from '../../../../../projects/headwind-ui/src/services/headwind-platform.service';

@Component({
  selector: 'app-switch-preview',
  standalone: true,
  imports: [HeadwindSwitchComponent, HeadwindSwitchThumbComponent, HeadwindSwitchTrackComponent],
  templateUrl: './switch-preview.component.html',
  styleUrl: './switch-preview.component.scss',
})
export class SwitchPreviewComponent implements AfterViewInit, OnDestroy {
  checked = false;

  private _timeoutId?: any;

  constructor(
    private readonly _ngZone: NgZone,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _headwindPlatformService: HeadwindPlatformService,
  ) {}

  ngAfterViewInit() {
    if (this._headwindPlatformService.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this.check();
      });
    }
  }

  ngOnDestroy() {
    clearTimeout(this._timeoutId);
  }

  check(): void {
    clearTimeout(this._timeoutId);

    this._timeoutId = setTimeout(() => {
      this.checked = true;
      this._changeDetectorRef.detectChanges();
      this.uncheck();
    }, 1500);
  }

  uncheck(): void {
    clearTimeout(this._timeoutId);

    this._timeoutId = setTimeout(() => {
      this.checked = false;
      this._changeDetectorRef.detectChanges();
      this.check();
    }, 1500);
  }
}
