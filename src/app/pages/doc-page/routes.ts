import { Routes } from '@angular/router';
import { DocPageComponent } from './doc-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DocPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'v17.0.0',
      },
      {
        path: 'getting-started',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/getting-started',
      },
      {
        path: 'accordion',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/accordion',
      },
      {
        path: 'checkbox',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/checkbox',
      },
      {
        path: 'overlay',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/overlay',
      },
      {
        path: 'popover',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/popover',
      },
      {
        path: 'radio-group',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/radio-group',
      },
      {
        path: 'select',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/select',
      },
      {
        path: 'switch',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/switch',
      },
      {
        path: 'tab-group',
        pathMatch: 'full',
        redirectTo: 'v17.0.0/tab-group',
      },
      {
        path: 'v17.0.0',
        loadChildren: () => import('./v17-0-0-page/routes').then((m) => m.routes),
      },
    ],
  },
];
