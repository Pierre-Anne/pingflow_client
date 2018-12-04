import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:string = '';
  passwd:string = '';


  constructor(private _login: LoginService) { }

  ngOnInit() {
  }

  connection() {
    this._login.connection(this.login, this.passwd);
  }

}
