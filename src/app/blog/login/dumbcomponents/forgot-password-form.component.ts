import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { FORGOTPASS_STATUS } from 'src/app/models/Enums';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit, OnChanges {

  myModel = {
    username: "",
    email: "",
    mobilenum: ""
  }

  @Input()
  forgotpassStatus: FORGOTPASS_STATUS;

  @Output()
  infoEmitter: EventEmitter<{username,email,mobile}> = new EventEmitter<{username,email,mobile}>();

  statusInvalid : FORGOTPASS_STATUS = FORGOTPASS_STATUS.INVALID;
  message: string = "Invalid Input";

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges () {
    console.log (this.forgotpassStatus);
  }

  handleSubmit() {
    let username = this.myModel.username;
    let email = this.myModel.email;
    let mobile = this.myModel.mobilenum;
    this.infoEmitter.emit({username,email,mobile});
  }

}
