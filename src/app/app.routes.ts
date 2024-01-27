import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'documentation',
    loadChildren: () => import('./pages/documentation-page/routes').then((m) => m.routes),
  },
  {
    path: 'example',
    loadChildren: () => import('./pages/example-page/routes').then((m) => m.routes),
  },
  {
    path: 'playground',
    loadChildren: () => import('./pages/playground/routes').then((m) => m.routes),
  },
];
