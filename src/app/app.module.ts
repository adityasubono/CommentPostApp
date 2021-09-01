import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostItemComponent } from './components/post/post-item/post-item.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentItemComponent } from './components/comment/comment-item/comment-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import {JwPaginationModule} from 'jw-angular-pagination';
import {PageDashboardModule} from './pages/page-dashboard/page-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostItemComponent,
    CommentComponent,
    NavbarComponent,
    PageMainComponent,
    PageUserComponent,
    PageHomeComponent,
    PageDashboardComponent,
    PageLoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwPaginationModule,
    PageDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
