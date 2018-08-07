import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './containers/dashboard.component';

//testing
import { ForgotPasswordFormComponent } from 'src/app/blog/login/dumbcomponents/forgot-password-form.component';
import { LoginComponent } from 'src/app/blog/login/containers/login.component';
import { SampleComponent } from './containers/sample.component';
import { AppComponent } from 'src/app/blog/dashboard/containers/app.component';

const routes: Routes = [
  /*
  { path: "dashboard", component: DashboardComponent, children : [
    {path : "profile", component : ForgotPasswordFormComponent, outlet : "test"}
  ] },
  */

  { path: "dashboard", component: DashboardComponent},
  {path : "sample", component : SampleComponent, outlet : "test"},
  {path : "app", component : AppComponent, outlet : "test"}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    //smart
    DashboardComponent,

    //testing
    SampleComponent,
    AppComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
