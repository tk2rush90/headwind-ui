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
        redirectTo: 'v17',
      },
      {
        path: 'getting-started',
        pathMatch: 'full',
        redirectTo: 'v17/getting-started',
      },
      {
        path: 'accordion',
        pathMatch: 'full',
        redirectTo: 'v17/accordion',
      },
      {
        path: 'checkbox',
        pathMatch: 'full',
        redirectTo: 'v17/checkbox',
      },
      {
        path: 'overlay',
        pathMatch: 'full',
        redirectTo: 'v17/overlay',
      },
      {
        path: 'popover',
        pathMatch: 'full',
        redirectTo: 'v17/popover',
      },
      {
        path: 'radio-group',
        pathMatch: 'full',
        redirectTo: 'v17/radio-group',
      },
      {
        path: 'select',
        pathMatch: 'full',
        redirectTo: 'v17/select',
      },
      {
        path: 'switch',
        pathMatch: 'full',
        redirectTo: 'v17/switch',
      },
      {
        path: 'tab-group',
        pathMatch: 'full',
        redirectTo: 'v17/tab-group',
      },
      {
        path: 'v17.0.0/getting-started',
        pathMatch: 'full',
        redirectTo: 'v17/getting-started',
      },
      {
        path: 'v17.0.0/accordion',
        pathMatch: 'full',
        redirectTo: 'v17/accordion',
      },
      {
        path: 'v17.0.0/checkbox',
        pathMatch: 'full',
        redirectTo: 'v17/checkbox',
      },
      {
        path: 'v17.0.0/overlay',
        pathMatch: 'full',
        redirectTo: 'v17/overlay',
      },
      {
        path: 'v17.0.0/popover',
        pathMatch: 'full',
        redirectTo: 'v17/popover',
      },
      {
        path: 'v17.0.0/radio-group',
        pathMatch: 'full',
        redirectTo: 'v17/radio-group',
      },
      {
        path: 'v17.0.0/select',
        pathMatch: 'full',
        redirectTo: 'v17/select',
      },
      {
        path: 'v17.0.0/switch',
        pathMatch: 'full',
        redirectTo: 'v17/switch',
      },
      {
        path: 'v17.0.0/tab-group',
        pathMatch: 'full',
        redirectTo: 'v17/tab-group',
      },
      {
        path: 'v17',
        loadChildren: () => import('./v17-0-0-page/routes').then((m) => m.routes),
      },
    ],
  },
];
