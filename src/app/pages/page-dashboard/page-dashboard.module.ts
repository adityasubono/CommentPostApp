import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardRoutingModule } from './page-dashboard-routing.module';
import { UserComponent } from '../../components/user/user.component';
import { UserItemComponent} from '../../components/user/user-item/user-item.component';
import {PostDetailComponent} from '../../components/post/post-detail/post-detail.component';
import {CommentItemComponent} from '../../components/comment/comment-item/comment-item.component';

@NgModule({
  imports: [
    CommonModule,
    PageDashboardRoutingModule,
  ],
  exports: [
    UserItemComponent,
    CommentItemComponent,
    PostDetailComponent,
  ],
  declarations: [
    UserComponent,
    UserItemComponent,
    PostDetailComponent,
    CommentItemComponent,
  ]
})
export class PageDashboardModule { }
