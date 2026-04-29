import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./pages/form/form').then((m) => m.Form)
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('./pages/demo/demo.component').then((m) => m.DemoComponent)
  }
];
