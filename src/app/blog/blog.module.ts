import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//from projects
import { BlogComponent } from 'src/app/blog/blog.component';
import { BlogService } from 'src/app/service/blog.service';
import { LoginModule } from 'src/app/blog/login/login.module';
import { DashboardModule } from 'src/app/blog/dashboard/dashboard.module';
import { PostsModule } from 'src/app/blog/posts/posts.module';

// for routing
import { LoginComponent } from 'src/app/blog/login/containers/login.component';
import { DashboardComponent } from 'src/app/blog/dashboard/containers/dashboard.component';
import { PostsComponent } from 'src/app/blog/posts/containers/posts.component';
import { ShowPostsComponent } from 'src/app/blog/posts/containers/show-posts.component';
import { EditPostComponent } from 'src/app/blog/posts/containers/edit-post.component';
import { ProfileModule } from 'src/app/blog/profile/profile.module';
import { ProfileComponent } from 'src/app/blog/profile/containers/profile.component';
import { ViewPostComponent } from 'src/app/blog/posts/containers/view-post.component';
import { AddPostComponent } from 'src/app/blog/posts/containers/add-post.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login/attempt', pathMatch: 'full'
  },
  {
    path: 'login/:type', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: 'posts', component: PostsComponent, outlet: 'sub-outlet-1', children: [
          { path: '', pathMatch: 'full', redirectTo: 'show/approvedall' },
          { path: 'show/:type', component: ShowPostsComponent, outlet: 'sub-outlet-2' },
          { path: 'edit/:id', component: EditPostComponent, outlet: 'sub-outlet-2' },
          { path: 'view/:id', component: ViewPostComponent, outlet: 'sub-outlet-2' },
          { path: 'add', component: AddPostComponent, outlet: 'sub-outlet-2' },
        ]
      },
      {
        path: 'profile', component: ProfileComponent, outlet: 'sub-outlet-1'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      // Tell the router to use the HashLocationStrategy.
      useHash: true
    }),
    LoginModule,
    DashboardModule,
    PostsModule,
    ProfileModule
  ],
  declarations: [
    BlogComponent
  ],
  exports: [
    BlogComponent,
    RouterModule
  ],
  providers: [
    HttpClientModule,
    BlogService
  ]
})
export class BlogModule { }
