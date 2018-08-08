import { Component, OnInit } from '@angular/core';

import { BlogService } from 'src/app/service/blog.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  user : User;

  constructor(
    private blogservice : BlogService) { }

  ngOnInit() {
    this.user = this.blogservice.currentUser;
  }



}
