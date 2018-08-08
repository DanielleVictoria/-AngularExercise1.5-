import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './containers/dashboard.component';
import { NavbarComponent } from 'src/app/blog/dashboard/dumbcomponents/dashboard/navbar.component';

const routes: Routes = [

];

@NgModule({
  imports: [
    //angular
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  declarations: [
    //smart
    DashboardComponent,

    //dumb
    NavbarComponent,
  ],
  exports: [
    DashboardComponent,
    RouterModule
  ]
})
export class DashboardModule { }
