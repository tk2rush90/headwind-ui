import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { HeadwindPlatformService } from '../../../../../projects/headwind-ui/src/services/headwind-platform.service';

@Component({
  selector: 'app-tab-group-preview',
  standalone: true,
  imports: [],
  templateUrl: './tab-group-preview.component.html',
  styleUrl: './tab-group-preview.component.scss',
})
export class TabGroupPreviewComponent implements AfterViewInit, OnDestroy {
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
