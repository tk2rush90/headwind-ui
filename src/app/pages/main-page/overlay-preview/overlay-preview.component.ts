import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { HeadwindPlatformService } from '../../../../../projects/headwind-ui/src/services/headwind-platform.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-overlay-preview',
  standalone: true,
  imports: [],
  templateUrl: './overlay-preview.component.html',
  styleUrl: './overlay-preview.component.scss',
  animations: [
    trigger('fadeInGrowUp', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(.5)',
        }),
      ),
      state(
        'show',
        style({
          opacity: 1,
          transform: 'scale(1)',
        }),
      ),
      transition('void <=> show', animate('.1s')),
    ]),
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      state(
        'show',
        style({
          opacity: 1,
        }),
      ),
      transition('void <=> show', animate('.1s')),
    ]),
  ],
})
export class OverlayPreviewComponent implements AfterViewInit, OnDestroy {
  opened = false;

  private _timeoutId?: any;

  constructor(
    private readonly _ngZone: NgZone,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _headwindPlatformService: HeadwindPlatformService,
  ) {}

  ngAfterViewInit() {
    if (this._headwindPlatformService.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this.open();
      });
    }
  }

  ngOnDestroy() {
    clearTimeout(this._timeoutId);
  }

  open(): void {
    clearTimeout(this._timeoutId);

    this._timeoutId = setTimeout(() => {
      this.opened = true;
      this._changeDetectorRef.detectChanges();
      this.close();
    }, 1500);
  }

  close(): void {
    clearTimeout(this._timeoutId);

    this._timeoutId = setTimeout(() => {
      this.opened = false;
      this._changeDetectorRef.detectChanges();
      this.open();
    }, 1500);
  }
}
