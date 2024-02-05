import { Component, EmbeddedViewRef, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { HeadwindOverlayService } from '@favian/headwind-ui';
import { RouteLoadingService } from '../../services/route-loading.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-route-loading',
  standalone: true,
  imports: [],
  templateUrl: './route-loading.component.html',
  styleUrl: './route-loading.component.scss',
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      transition(
        'void => *',
        animate(
          '.1s',
          style({
            opacity: 1,
          }),
        ),
      ),
      transition('* => void', animate('.1s')),
    ]),
  ],
})
export class RouteLoadingComponent implements OnDestroy {
  @ViewChild('routeLoading', { read: TemplateRef }) routeLoading?: TemplateRef<any>;

  private _routeLoadingRef?: EmbeddedViewRef<any>;

  constructor(
    private readonly _headwindOverlayService: HeadwindOverlayService,
    private readonly _routeLoadingService: RouteLoadingService,
  ) {
    this._routeLoadingService.showLoading.pipe(takeUntilDestroyed()).subscribe(() => this.showLoading());
    this._routeLoadingService.hideLoading.pipe(takeUntilDestroyed()).subscribe(() => this.hideLoading());
  }

  ngOnDestroy() {
    this._routeLoadingRef?.destroy();
  }

  showLoading(): void {
    if (this.routeLoading && !this._routeLoadingRef) {
      this._routeLoadingRef = this._headwindOverlayService.open(this.routeLoading, () => {
        delete this._routeLoadingRef;
      });
    }
  }

  hideLoading(): void {
    this._routeLoadingRef?.destroy();
  }
}
