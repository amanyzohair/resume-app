import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { smoothFadeIn } from 'src/app/animation/animation';
import { CommentService } from 'src/app/services/comment.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
  animations: [smoothFadeIn]
})
export class CommentFormComponent implements OnInit {

  comments$;
  commentEdited={};
  constructor(
    private commentServ: CommentService,
    private dbServ: DatabaseService,
  ) {
    this.comments$ = this.dbServ.getComment();
  }
  
  ngOnInit(): void {
  } 
  form = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    commentText : new FormControl('',[
      Validators.required,
    ])
  });
  comment(f){
    this.commentServ.addComment(f.value);
    f.reset();
  }

}
