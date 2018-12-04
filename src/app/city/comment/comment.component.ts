import {Component, OnInit, Input} from '@angular/core';
import { CommentsService } from './comments.service';
import { CitiesService } from '../cities.service';
import { city } from '../city'
import { LoginService } from '../../login/login-service.service';
import { comment } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() currentCityId: number;


  comments : comment[];
  newComment: string;
  connection;

  constructor(private _comments: CommentsService,
              private _cities: CitiesService,
              private _login: LoginService) { }

  ngOnInit() {

    this._cities.selectedCityChanged.subscribe(
      (selectedCity: city) => {
        this.currentCityId = selectedCity['id'];
        this.getComments();
      }
    )

    this.connection = this._comments.getMessages().subscribe(
      (newComment: any ) => {
        this.comments.push(newComment.text);
      }
    );
  }

  getComments() {
    this._comments.getComments(this.currentCityId).subscribe((data: comment[]) => {
      console.log(data);
      this.comments = data;
    });
  }

  addComment() {
    let currentUser = this._login.currentUser;
    this._comments.sendMessage({comment: this.newComment , cityId: this.currentCityId, userId: (currentUser)?currentUser['id']:1});
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
