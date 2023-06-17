import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPanelRoutingModule } from './app-panel-routing.module';
import { AppPanelComponent } from './app-panel.component';
import { AllCommentComponent } from './comments/all-comment/all-comment.component';
import { CommentControlComponent } from './comments/comment-control/comment-control.component';
import { PostControlComponent } from './posts/post-control/post-control.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { PostsComponent } from './posts/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppPanelComponent,
    AllCommentComponent,
    CommentControlComponent,
    PostControlComponent,
    AllPostsComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    AppPanelRoutingModule,
    HttpClientModule
  ],
  exports:[
    AppPanelComponent
  ]
})
export class AppPanelModule { }
