import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationCancel,
  NavigationEnd,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { RouteLoadingComponent } from './common/route-loading/route-loading.component';
import { RouteLoadingService } from './services/route-loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouteLoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'headwind-ui-prototype';

  constructor(
    private readonly _router: Router,
    private readonly _routeLoadingService: RouteLoadingService,
  ) {
    this._router.events.subscribe((events) => {
      if (events instanceof RouteConfigLoadStart) {
        this._routeLoadingService.startLoading();
      } else if (
        events instanceof RouteConfigLoadEnd ||
        events instanceof NavigationCancel ||
        events instanceof NavigationEnd
      ) {
        this._routeLoadingService.stopLoading();
      }
    });
  }
}
