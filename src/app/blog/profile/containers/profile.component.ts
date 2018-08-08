import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor(
    public blogservice: BlogService
  ) { }

  ngOnInit() {
  }

  editUser(user : User) {
    this.blogservice.updateUser (user).subscribe();
    this.blogservice.currentUser = user;
  }

}
