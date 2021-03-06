import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BlogService } from 'src/app/service/blog.service';
import { Post } from 'src/app/models/Post';


@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
})
export class ShowPostsComponent implements OnInit {

  postsToShow: Post[];
  type: string;

  constructor(
    private route: ActivatedRoute,
    private blogservice: BlogService,
    private router: Router
  ) {

    // detect changes in query params
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    console.log("OnInit");

    this.determinePosts();
  }

  //region  ///////////////////////////////////////// --> SHOW CONFIGURATION
  sortDate = '&&_sort=date&&_order=desc'; 

  // get all approved stories and set to show
  showApprovedPosts() {
    this.blogservice.getPostby('?status=APPROVED&&draft=false' + this.sortDate).subscribe(posts => this.postsToShow = posts);
  }

  // get user's approved posts
  showUserApprovedPosts() {
    this.blogservice.getPostby('?status=APPROVED&&draft=false&&author=' + this.blogservice.currentUser.username + this.sortDate)
      .subscribe(posts => this.postsToShow = posts);
  }

  // get all approved stories and set to show
  showPendingPosts() {
    this.blogservice.getPostby('?status=PENDING&&draft=false'+ this.sortDate).subscribe(posts => this.postsToShow = posts);
  }

  // get user's pending posts
  showUserPendingPosts() {
    this.blogservice.getPostby('?status=PENDING&&draft=false&&author=' + this.blogservice.currentUser.username + this.sortDate)
      .subscribe(posts => this.postsToShow = posts);
  }

  // get all returned stories and set to show
  showReturnedPosts() {
    this.blogservice.getPostby('?status=RETURNED&&draft=false').subscribe(posts => this.postsToShow = posts);
  }

  // get user's returned posts
  showUserReturnedPosts() {
    this.blogservice.getPostby('?status=RETURNED&&draft=false&&author=' + this.blogservice.currentUser.username)
      .subscribe(posts => this.postsToShow = posts);
  }

  // get user's returned posts
  showUserDrafts() {
    this.blogservice.getPostby('?draft=true&&author=' + this.blogservice.currentUser.username)
      .subscribe(posts => this.postsToShow = posts);
  }

  determinePosts() {

    this.type = this.route.snapshot.paramMap.get('type');

    if (this.type == 'approvedall') {
      this.showApprovedPosts();
    }
    if (this.type == 'approveduser') {
      this.showUserApprovedPosts();
    }
    if (this.type == 'pendingall') {
      this.showPendingPosts();
    }
    if (this.type == 'pendinguser') {
      this.showUserPendingPosts();
    }
    if (this.type == 'returnedall') {
      this.showReturnedPosts();
    }
    if (this.type == 'returneduser') {
      this.showUserReturnedPosts();
    }
    if (this.type == 'draftsuser') {
      this.showUserDrafts();
    }
  }

  // get all blogs with the following filters
  handleFilterEmitter({ date, author, category, sort }) {
    let newpath: string = '?draft=false&&';
    if (date) { newpath = newpath.concat('date=' + date + '&&'); }
    if (author) { newpath = newpath.concat('author=' + author + '&&'); }
    if (category) { newpath = newpath.concat('category=' + category + '&&'); }
    if (sort) {
      newpath = newpath.concat('_sort=title&&_order=');
      sort == 'Ascending' ? newpath = newpath.concat('asc') : newpath = newpath.concat('desc');
    }
    
    this.blogservice.getPostby(newpath).subscribe(posts => this.postsToShow = posts);
  }
  //endregion

  // checks if an author of a post is the current user
  isCurrentUser(author: string): boolean {
    return author == this.blogservice.currentUser.username;
  }

  // checks if an author of a post is the current user
  isApprover : boolean = this.blogservice.currentUser.type == "APPROVER";

  deletePost(id : number) {
    this.blogservice.deletePost(id).subscribe();
    this.router.navigate(['../../show','approvedall'], { relativeTo: this.route});
  }

  editPost(id: number) {
    //this.router.navigate(['../', {outlets: { 'sub-outlet-2' : ['edit', id] } } ], {relativeTo : this.route});
    this.router.navigate(['../../edit', id], { relativeTo: this.route });
  }

  viewPost(id: number) {
    this.router.navigate(['../../view', id], { relativeTo: this.route });
  }

}
