import { Component, OnInit, } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

import { LOGIN_STATUS, FORGOTPASS_STATUS } from 'src/app/models/Enums';
import { BlogService } from 'src/app/service/blog.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  tempOutlet: string;

  // For login
  status: LOGIN_STATUS;

  // For Forgot Password
  forgotpassStatus: FORGOTPASS_STATUS = FORGOTPASS_STATUS.NULL;
  statusSuccess: FORGOTPASS_STATUS = FORGOTPASS_STATUS.SUCCESS;

  constructor(
    private blogservice: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.blogservice.testing) {
      //this.router.navigate(['dashboard', {outlets: {'sub-outlet-1': ['posts']}}]);
      this.router.navigate(['dashboard']);
    }
    this.tempOutlet = this.route.snapshot.paramMap.get('type');
    this.status = LOGIN_STATUS.LOGIN_NULL;

  }

  //region Login Handles
  handleLoginAttemptEmitter({ username, password }): void {

    for (let user of this.blogservice.users) {
      if (user.username === username && user.password === password) {
        this.status = LOGIN_STATUS.LOGIN_SUCCESS;
        this.blogservice.currentUser = user;
        this.router.navigate(['dashboard']);
      } else if (user.username === username && user.password !== password) {
        this.status = LOGIN_STATUS.LOGIN_WRONG_PASSWORD;
        return;
      }
    }
    this.status = LOGIN_STATUS.LOGIN_WRONG_USERNAME;
  }

  handleForgotPasswordEmitter(event: any) {
    this.router.navigate(['/login/forgotpass']);
    this.tempOutlet = "forgotpass"
  }
  //endregion

  //region ForgotPassword
  userpass: string;
  handleForgotPassword({ username, email, mobile }) {
    console.log({ username, email, mobile });
    for (let user of this.blogservice.users) {
      if (username === user.username && email === user.email && mobile === user.mobilenum) {
        this.forgotpassStatus = FORGOTPASS_STATUS.SUCCESS;
        this.blogservice.currentUser = user;
        this.userpass = user.password;
        return;
      }
    }
    this.forgotpassStatus = FORGOTPASS_STATUS.INVALID;
  }
  //endregion
}
