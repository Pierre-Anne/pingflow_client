import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { CitiesService } from '../cities.service';
import { comment } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})
export class CommentComponent implements OnInit {

  comments : comment[];
  newComment: string;
  connection;

  constructor(private _comments: CommentsService,
              private _cities: CitiesService) { }

  ngOnInit() {
    this._comments.getComments().subscribe((data: comment[]) => {
      console.log(data);
      this.comments = data;
    });

    this.connection = this._comments.getMessages().subscribe(
      (newComment: comment ) => {
        this.comments.push(newComment);
      }
    );
  }

  addComment() {
    let selectedCity = this._cities.selectedCity;
    this._comments.sendMessage({comment: this.newComment , cityId: selectedCity['id'], userId: 200});
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
