import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_CONFIG } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
  private loginUrl = 'login';
  private _currentUser: any;


  connection(login, passwd) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    this.http.post(API_CONFIG.FULL_ENDPOINT + this.loginUrl, JSON.stringify({'login': login, 'passwd': passwd}), {
      headers: headers
    }).subscribe(data => {
      this._currentUser = data;
      this.router.navigate(['/city']);
    });
  }


  get currentUser(): any {
    return this._currentUser;
  }

}
