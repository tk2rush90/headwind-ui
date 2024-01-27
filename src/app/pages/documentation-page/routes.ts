import { Routes } from '@angular/router';
import { DocumentationPageComponent } from './documentation-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DocumentationPageComponent,
    children: [
      {
        path: 'select',
        loadChildren: () => import('./select-page/routes').then((m) => m.routes),
      },
    ],
  },
];
