import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  /** Hooks into the Auth0 authz flow */
  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: "signup" });
  }

}
