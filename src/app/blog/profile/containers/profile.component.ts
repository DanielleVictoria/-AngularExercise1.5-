import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  currentUser : User;

  constructor(
    public blogservice: BlogService
  ) { }

  ngOnInit() {
    this.currentUser = this.blogservice.currentUser;
  }

  editUser(user : User) {
    this.blogservice.updateUser (user).subscribe(user => {

      for (let post of this.blogservice.posts) {
        if (post.author != this.blogservice.currentUser.username) {continue;}
        post.author = user.username;
      }
      this.blogservice.currentUser = user,
      this.currentUser = user;
    });
  }
}
