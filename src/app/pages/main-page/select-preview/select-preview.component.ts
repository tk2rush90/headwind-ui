import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { HeadwindPlatformService } from '../../../../../projects/headwind-ui/src/services/headwind-platform.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-select-preview',
  standalone: true,
  imports: [],
  templateUrl: './select-preview.component.html',
  styleUrl: './select-preview.component.scss',
  animations: [
    trigger('growUp', [
      state(
        'void',
        style({
          height: 0,
        }),
      ),
      state(
        'show',
        style({
          height: '*',
        }),
      ),
      transition('void <=> show', animate('.1s')),
    ]),
  ],
})
export class SelectPreviewComponent implements AfterViewInit, OnDestroy {
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
