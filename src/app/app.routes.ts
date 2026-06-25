import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { MainLayout } from './core/layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/authentication/authentication.routes').then(
        (routes) => routes.authenticationRoutes
      )
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.routes').then((routes) => routes.homeRoutes)
      },
      {
        path: 'locations',
        loadChildren: () =>
          import('./features/locations/locations.routes').then((routes) => routes.locationRoutes)
      },
      {
        path: 'checklist-templates',
        loadChildren: () =>
          import('./features/checklist-templates/checklist-templates.routes').then(
            (routes) => routes.checklistTemplateRoutes
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
