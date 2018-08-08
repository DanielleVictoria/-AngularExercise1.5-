import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FORM_TYPE } from 'src/app/models/Enums';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input()
  type: FORM_TYPE;

  @Input()
  postToEdit: Post;

  @Output()
  resultEmitter: EventEmitter<{ category, publish, title, body, subtitle }> = new EventEmitter();

  @Output()
  deleteEmitter : EventEmitter<Post> = new EventEmitter();

  // for comparisons in html
  typeEDIT = FORM_TYPE.EDIT;
  typeADD = FORM_TYPE.ADD;

  myModel = {
    'category': '',
    'publish': '',
    'title': '',
    'body': '',
    'subtitle': '',
  }

  constructor() { }

  ngOnInit() {
    if (this.type == this.typeEDIT && this.postToEdit) {
      this.myModel = {
        category: this.postToEdit.category,
        publish: this.postToEdit.draft ? 'DRAFT' : 'PUBLISH',
        title: this.postToEdit.title,
        body: this.postToEdit.body,
        subtitle: this.postToEdit.subtitle ? this.postToEdit.subtitle : ''
      }
    }
  }

  handleSubmit() {
    let category = this.myModel.category;
    let publish = this.myModel.publish;
    let title = this.myModel.title;
    let body = this.myModel.body;
    let subtitle = this.myModel.subtitle;
    
    this.resultEmitter.emit({
      category,
      publish,
      title,
      body,
      subtitle
    });
  }

  handleDeletePost () {
    this.deleteEmitter.emit(this.postToEdit);
  }



}
