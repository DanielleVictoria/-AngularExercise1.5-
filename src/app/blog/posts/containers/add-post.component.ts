import { Component, OnInit } from '@angular/core';
import { FORM_TYPE } from 'src/app/models/Enums';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
})
export class AddPostComponent implements OnInit {
  typeADD = FORM_TYPE.ADD;

  post: Post;

  constructor(
    private blogservice: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges() {

  }

  handleResult({ category, publish, title, body, subtitle }) {
    console.log ({ category, publish, title, body, subtitle });
    let date = this.getDateToday();
    let post: Post;
    post = {
      id: 0,
      status: publish == 'DRAFT' ? 'DRAFT' : 'PENDING',
      title : title,
      subtitle : subtitle,
      author: this.blogservice.currentUser.username,
      category : category,
      date : date,
      body : body,
      draft: publish == 'DRAFT' ? true : false,
    }
    this.blogservice.addPost (post).subscribe(post => {
      console.log (post);
    });

    this.router.navigate(['../show','approvedall'], { relativeTo: this.route });
  }

  private getDateToday(): string {
    let date = new Date(Date.now());
    let month = date.getMonth() + 1;
    let monthString = month > 9 ? '' + month.toString() : '0' + month.toString();
    let day = date.getDate() > 9 ? '' + date.getDate().toString() : '0' + date.getDate().toString();

    return monthString + "/" + day + "/" + date.getFullYear();
  }
}
