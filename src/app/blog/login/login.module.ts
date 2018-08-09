import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// from projects
import { LoginComponent } from './containers/login.component';
import { LoginFormComponent } from './dumbcomponents/login-form.component';
import { ForgotPasswordFormComponent } from './dumbcomponents/forgot-password-form.component';

import { CarouselModule } from 'ngx-bootstrap';

const routes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild (routes),

    CarouselModule.forRoot(),
  ],
  declarations: [
    //smart
    LoginComponent,

    //dumb
    LoginFormComponent,
    ForgotPasswordFormComponent
  ],
  exports : [
    LoginComponent,
    RouterModule
  ] 
})
export class LoginModule { }
