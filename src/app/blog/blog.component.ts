import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.router.navigate (["/login/attempt"]);
  }

}
