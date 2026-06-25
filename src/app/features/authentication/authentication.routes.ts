import { Routes } from '@angular/router';

import { LoginPage } from './pages/login-page/login-page';

export const authenticationRoutes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];
