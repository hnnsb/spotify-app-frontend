import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private readonly loginService:LoginService) {

  }

  login() {
    this.loginService.getLoginUri()
  }
}
