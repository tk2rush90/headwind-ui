import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HeadwindPlatformService } from '../../../../../projects/headwind-ui/src/services/headwind-platform.service';

@Component({
  selector: 'app-checkbox-preview',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-preview.component.html',
  styleUrl: './checkbox-preview.component.scss',
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
  ],
})
export class CheckboxPreviewComponent implements AfterViewInit, OnDestroy {
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
