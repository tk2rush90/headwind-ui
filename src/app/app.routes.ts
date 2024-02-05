import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main-page/routes').then((m) => m.routes),
  },
  {
    path: 'doc',
    loadChildren: () => import('./pages/doc-page/routes').then((m) => m.routes),
  },
  {
    path: 'press-kit',
    loadChildren: () => import('./pages/press-kit-page/routes').then((m) => m.routes),
  },
  {
    path: 'versioning',
    loadChildren: () => import('./pages/versioning-page/routes').then((m) => m.routes),
  },
];
