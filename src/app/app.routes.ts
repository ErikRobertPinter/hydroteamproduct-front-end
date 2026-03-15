import { Routes } from '@angular/router';
import { PublicLayout } from './public/public-layout/public-layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./public/home/home-module').then((m) => m.HomeModule),
      },
      {
        path: 'references',
        loadChildren: () =>
          import('./public/references/references-module').then(
            (m) => m.ReferencesModule,
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./public/about/about-module').then((m) => m.AboutModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./public/login/login-module').then((m) => m.LoginModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./public/contact/contact-module').then(
            (m) => m.ContactModule,
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./public/page-not-found/page-not-found-module').then(
            (m) => m.PageNotFoundModule,
          ),
      },
    ],
  },
];
