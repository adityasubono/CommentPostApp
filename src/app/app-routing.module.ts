import { PageUserComponent } from './pages/page-user/page-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {PageDashboardComponent} from './pages/page-dashboard/page-dashboard.component';
import {PageMainComponent} from './pages/page-main/page-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: '', component: PageMainComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'dashboard/:id', loadChildren: () => import('./pages/page-dashboard/page-dashboard.module').then(u => u.PageDashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
