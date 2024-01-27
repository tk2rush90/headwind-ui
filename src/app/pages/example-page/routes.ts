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
    ],
  },
];
