import { Routes } from '@angular/router';
import { ExamplePageComponent } from './example-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ExamplePageComponent,
    children: [
      {
        path: 'default-select',
        loadChildren: () => import('./default-select-page/routes').then((m) => m.routes),
      },
      {
        path: 'default-checkbox',
        loadChildren: () => import('./default-checkbox-page/routes').then((m) => m.routes),
      },
      {
        path: 'default-accordion',
        loadChildren: () => import('./default-accordion-page/routes').then((m) => m.routes),
      },
      {
        path: 'default-radio-group',
        loadChildren: () => import('./default-radio-group-page/routes').then((m) => m.routes),
      },
      {
        path: 'default-popover',
        loadChildren: () => import('./default-popover-page/routes').then((m) => m.routes),
      },
      {
        path: 'default-tab-group',
        loadChildren: () => import('./default-tab-group-page/routes').then((m) => m.routes),
      },
    ],
  },
];
