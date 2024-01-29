import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { HeadwindPlatformService } from '../../../../../projects/headwind-ui/src/services/headwind-platform.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-radio-group-preview',
  standalone: true,
  imports: [],
  templateUrl: './radio-group-preview.component.html',
  styleUrl: './radio-group-preview.component.scss',
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
export class RadioGroupPreviewComponent implements AfterViewInit, OnDestroy {
  selected = 0;

  private _timeoutId?: any;

  constructor(
    private readonly _ngZone: NgZone,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _headwindPlatformService: HeadwindPlatformService,
  ) {}

  ngAfterViewInit() {
    if (this._headwindPlatformService.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this.toNext();
      });
    }
  }

  ngOnDestroy() {
    clearTimeout(this._timeoutId);
  }

  toNext(): void {
    clearTimeout(this._timeoutId);

    this._timeoutId = setTimeout(() => {
      const next = this.selected + 1;

      if (next > 2) {
        this.selected = 0;
      } else {
        this.selected = next;
      }

      this._changeDetectorRef.detectChanges();
      this.toNext();
    }, 1000);
  }
}
