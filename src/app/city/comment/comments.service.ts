import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { API_CONFIG } from '../../environment';
import { comment } from './comment';

import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentUrl = 'comments';
  private socket;

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get(API_CONFIG.FULL_ENDPOINT + this.commentUrl);
  }

  sendMessage(newComment: any) {
    this.socket.emit('add-message', newComment);
    console.log(newComment);

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    this.http.post(API_CONFIG.FULL_ENDPOINT + this.commentUrl, JSON.stringify(newComment), {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(API_CONFIG.SOCKET_URL);
      this.socket.on('message', (newComment: comment) => {
          observer.next(newComment);
      });
      return () => {
          this.socket.disconnect();
      };
    });
    return observable;
  }
}


