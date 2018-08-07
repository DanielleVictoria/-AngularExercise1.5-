import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// from projects
import { LoginComponent } from './containers/login.component';
import { LoginFormComponent } from './dumbcomponents/login-form.component';
import { ForgotPasswordFormComponent } from './dumbcomponents/forgot-password-form.component';

const routes: Routes = [
  {path : '', redirectTo : '/login/attempt', pathMatch : 'full'},
  {path : 'login/:type', component : LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild (routes),
  ],
  declarations: [
    //smart
    LoginComponent,

    //dumb
    LoginFormComponent,
    ForgotPasswordFormComponent
  ],
  exports : [
    LoginComponent
  ] 
})
export class LoginModule { }
