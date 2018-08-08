import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

// from projects
import { PostsComponent } from 'src/app/blog/posts/containers/posts.component';
import { FiltersComponent } from 'src/app/blog/posts/dumbcomponents/filters.component';
import { ShowPostsComponent } from './containers/show-posts.component';
import { PostPaneComponent } from './dumbcomponents/post-pane.component';
import { EditPostComponent } from './containers/edit-post.component';
import { PostFormComponent } from './dumbcomponents/post-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    // bootstrap
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    PostsComponent,
    ShowPostsComponent,

    FiltersComponent,
    PostPaneComponent,
    EditPostComponent,
    PostFormComponent,
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
