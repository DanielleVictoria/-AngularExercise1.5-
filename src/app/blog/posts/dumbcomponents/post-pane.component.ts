import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-post-pane',
  templateUrl: './post-pane.component.html',
  styleUrls: ['./post-pane.component.css']
})
export class PostPaneComponent implements OnInit {

  @Input()
  post : Post;

  @Input()
  isCurrentUser : boolean = false;

  @Output()
  editEmitter : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  deleteEmitter : EventEmitter<Post> = new EventEmitter<Post>();


  constructor() { }

  ngOnInit() {
  }

  handleEditPost(){
    this.editEmitter.emit (this.post.id);
  }

  handleDeletePost(){
    this.deleteEmitter.emit(this.post);
  }

}
