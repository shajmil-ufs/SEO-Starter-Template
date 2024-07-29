import { Routes } from '@angular/router';


import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
 
   
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./pages/admin/admin.module')
  //     .then(mod => mod.AdminModule)
  // },

  // {
  //   path: 'about',
  //   loadChildren: () => import('./pages/general/about/about.routes').then(routes => routes.routes)
  // },
  { path: '', component: HomeComponent },
 
  { path: '**', component: NotFoundComponent }
];