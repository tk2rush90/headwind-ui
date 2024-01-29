import { Routes } from '@angular/router';
import { V1700PageComponent } from './v17-0-0-page.component';

export const routes: Routes = [
  {
    path: '',
    component: V1700PageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'getting-started',
      },
      {
        path: 'getting-started',
        loadChildren: () => import('./doc-getting-started-page/routes').then((m) => m.routes),
      },
      {
        path: 'accordion',
        loadChildren: () => import('./doc-accordion-page/routes').then((m) => m.routes),
      },
      {
        path: 'checkbox',
        loadChildren: () => import('./doc-checkbox-page/routes').then((m) => m.routes),
      },
      {
        path: 'overlay',
        loadChildren: () => import('./doc-overlay-page/routes').then((m) => m.routes),
      },
      {
        path: 'popover',
        loadChildren: () => import('./doc-popover-page/routes').then((m) => m.routes),
      },
      {
        path: 'radio-group',
        loadChildren: () => import('./doc-radio-group-page/routes').then((m) => m.routes),
      },
      {
        path: 'select',
        loadChildren: () => import('./doc-select-page/routes').then((m) => m.routes),
      },
      {
        path: 'switch',
        loadChildren: () => import('./doc-switch-page/routes').then((m) => m.routes),
      },
      {
        path: 'tab-group',
        loadChildren: () => import('./doc-tab-group-page/routes').then((m) => m.routes),
      },
    ],
  },
];
