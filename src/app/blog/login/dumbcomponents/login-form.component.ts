import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { LOGIN_STATUS } from 'src/app/models/Enums';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnChanges {

  @Input()
  status: LOGIN_STATUS;

  @Output()
  loginAttemptEmitter: EventEmitter<{username,password}> = new EventEmitter();

  // emitter for telling the smart component to redirect
  @Output()
  forgotPasswordEmitter: EventEmitter<any> = new EventEmitter();

  // alert message
  message: string;
  isWrong: boolean = false;

  // for forms
  modelUser = {
    username: "",
    password: "",
  };

  // for debuggin
  testing: boolean;

  constructor() {
  }

  ngOnInit() {
    this.testing = false;
  }

  ngOnChanges () {
    switch (this.status) {
      case LOGIN_STATUS.LOGIN_WRONG_PASSWORD : 
        this.alert ("Wrong Password");
        break;
      case LOGIN_STATUS.LOGIN_WRONG_USERNAME : 
        this.alert ("No Username exists");
        break;
      default :
        break;
    }
  }

  handleLoginAttempt(): void {
    let username = this.modelUser.username;
    let password = this.modelUser.password;
    this.loginAttemptEmitter.emit({username,password});
  }

  handleForgotPassword() {
    this.forgotPasswordEmitter.emit();
  }

  alert(message: string) {
    this.message = message;
    this.isWrong = true;
  }
}
