import { Component, OnInit } from '@angular/core';
import { FORM_TYPE } from 'src/app/models/Enums';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/service/blog.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
})
export class EditPostComponent implements OnInit {

  typeEDIT = FORM_TYPE.EDIT;

  post: Post;

  constructor(
    private blogservice: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let posts = this.blogservice.posts;
    for (let post of posts) {
      if (post.id.toString() == id) {
        this.post = post;
      }
    }
  }

  ngOnChanges() {

  }

  handleResult({ category, publish, title, body, subtitle }) {
    let date = this.getDateToday();
    let post: Post;
    post = {
      id: this.post.id,
      status: publish == 'DRAFT' ? 'DRAFT' : 'PENDING',
      title : title,
      subtitle : subtitle,
      author: this.blogservice.currentUser.username,
      category : category,
      date : date,
      body : body,
      draft: publish == 'DRAFT' ? true : false,
    }
    this.blogservice.updatePost(post).subscribe(post => console.log(post));
    this.router.navigate(['../../show','approvedall'], { relativeTo: this.route });
  }

  private getDateToday(): string {
    let date = new Date(Date.now());
    let month = date.getMonth() + 1;
    let monthString = month > 9 ? '' + month.toString() : '0' + month.toString();
    let day = date.getDate() > 9 ? '' + date.getDate().toString() : '0' + date.getDate().toString();

    return monthString + "/" + day + "/" + date.getFullYear();
  }

  deletePost(post: Post) {
    this.blogservice.deletePost(post.id).subscribe();
    this.router.navigate(['../../show','approvedall'], { relativeTo: this.route });
  }
}
