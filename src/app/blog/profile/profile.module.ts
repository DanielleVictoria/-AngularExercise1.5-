import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

import { ProfileComponent } from 'src/app/blog/profile/containers/profile.component';
import { ProfileFormComponent } from './dumbcomponents/profile-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // bootstrap
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ]
})
export class ProfileModule { }
