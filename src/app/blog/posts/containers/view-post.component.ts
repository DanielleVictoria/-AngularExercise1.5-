import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
})
export class ViewPostComponent implements OnInit {

  post : Post;

  constructor(
    private route : ActivatedRoute,
    private blogservice : BlogService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let posts = this.blogservice.posts;
    for (let post of posts) {
      if (post.id.toString() == id) {
        this.post = post;
      }
    }
    console.log (this.post);
  }

  approvePost () {
    this.post.status = 'APPROVED';
    this.updatePost ();
  }

  returnPost () {
    this.post.status = 'RETURNED';
    this.updatePost ();
  }

  deletePost () {
    this.blogservice.deletePost(this.post.id).subscribe();
  }

  updatePost () {
    this.blogservice.updatePost (this.post).subscribe ();
  }
}
