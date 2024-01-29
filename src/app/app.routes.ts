import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main-page/routes').then((m) => m.routes),
  },
  {
    path: 'example',
    loadChildren: () => import('./pages/example-page/routes').then((m) => m.routes),
  },
  {
    path: 'playground',
    loadChildren: () => import('./pages/playground/routes').then((m) => m.routes),
  },
  {
    path: 'doc',
    loadChildren: () => import('./pages/doc-page/routes').then((m) => m.routes),
  },
];
