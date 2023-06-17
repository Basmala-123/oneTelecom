import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPanelComponent } from './app-panel.component';
import { PostControlComponent } from './posts/post-control/post-control.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { CommentControlComponent } from './comments/comment-control/comment-control.component';
import { AllCommentComponent } from './comments/all-comment/all-comment.component';
import { PostsComponent } from './posts/posts/posts.component';

const routes: Routes = [
   { path: '', component: AppPanelComponent },
  {
    path: 'comments',
    children: [
      { path: 'all', component: AllCommentComponent },
      { path: 'control', component: CommentControlComponent },
    ]
  },
  {
    path: 'posts',component:PostsComponent,
    children: [
      { path: 'all', component: AllPostsComponent },
      { path: 'control', component: PostControlComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPanelRoutingModule { }
