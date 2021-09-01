import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageDashboardComponent} from './page-dashboard.component';
import {UserDetailComponent} from '../../components/user/user-detail/user-detail.component';
import {PostDetailComponent} from "../../components/post/post-detail/post-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PageDashboardComponent,
  },
  {
    path: ':id',
    component: UserDetailComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageDashboardRoutingModule { }
