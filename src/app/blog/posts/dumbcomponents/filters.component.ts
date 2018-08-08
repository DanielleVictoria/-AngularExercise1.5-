import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  myModel = {
    'date': '',
    'author': '',
    'category': '',
    'sort': ''
  }

  @Output()
  filterEmitter : EventEmitter <{date, author, category, sort}> = new EventEmitter <{date, author, category, sort}>();

  constructor() { }

  ngOnInit() {
  }

  handleFilter(date : string) {
    let author = this.myModel.author;
    let category = this.myModel.category;
    let sort = this.myModel.sort;
    this.filterEmitter.emit ({date, author, category, sort});
  }

}
