import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//from projects
import { BlogComponent } from 'src/app/blog/blog.component';
import { BlogService } from 'src/app/service/blog.service';
import { LoginModule } from 'src/app/blog/login/login.module';
import { DashboardModule } from 'src/app/blog/dashboard/dashboard.module';

const routes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot (routes),

    LoginModule,
    DashboardModule
  ],
  declarations: [
    BlogComponent
  ],
  exports : [
    BlogComponent
  ],
  providers : [
    HttpClientModule,
    BlogService
  ]
})
export class BlogModule { }
