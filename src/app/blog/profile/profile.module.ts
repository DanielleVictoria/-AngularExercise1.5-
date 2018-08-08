import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from 'src/app/blog/profile/containers/profile.component';
import { ProfileFormComponent } from './dumbcomponents/profile-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ]
})
export class ProfileModule { }
