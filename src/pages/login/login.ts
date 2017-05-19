import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})

export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public userData: UserData) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
    }
  }

  onSignup() {
    this.userData.signup('');
  }
}
