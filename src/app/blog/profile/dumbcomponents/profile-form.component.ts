import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  editUserEmitter: EventEmitter<User> = new EventEmitter<User>();

  isEditing: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
    console.log(this.isEditing);
  }

  // dont forget to add interests
  handleSubmit(_username: string, _firstname: string, _middlename: string, _lastname: string, _email: string, _date: string) {
    let newuser: User = {
      id: this.user.id,
      type : this.user.type,
      username: _username,
      firstname: _firstname,
      middlename: _middlename,
      lastname: _lastname,
      email: _email,
      birthdate: _date,
      password: this.user.password,
      mobilenum: this.user.mobilenum

      // ADD interests HERE
    }

    this.editUserEmitter.emit(newuser);
  }

}
