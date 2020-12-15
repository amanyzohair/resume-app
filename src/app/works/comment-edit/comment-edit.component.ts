import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { smoothFadeIn } from 'src/app/animation/animation';
import { CommentService } from 'src/app/services/comment.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css'],
  animations:[smoothFadeIn]
})
export class CommentEditComponent implements OnInit {

  comments$;
  commentEdited;
  id ;
  constructor(
    private commentServ: CommentService,
    private dbServ: DatabaseService,
    private activRoute: ActivatedRoute,
    private router: Router
  ) {
    this.comments$ = this.dbServ.getComment();
    this.id = this.activRoute.snapshot.paramMap.get('id') ;
    // this.dbServ.getCommentById(id).subscribe(com =>console.log(com))
       if(this.id){
         this.dbServ.getCommentById(this.id).subscribe(com =>
          {
           if(com){
             this.commentEdited = com;
           }
         }
         )
       };

    //    this.comments$ = this.dbServ.getComment();
    // let id = this.activRoute.snapshot.paramMap.get('id') ;
    //    if(id){
    //      this.dbServ.getCommentById(id).subscribe(com =>
    //       {
    //        if(com){
    //          this.commentEdited = com;
    //          console.log(this.commentEdited);
    //        }
    //      }
    //      )
    //    };
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
  save(){
    this.commentServ.update(this.id, this.commentEdited)
    this.router.navigateByUrl('/works');
  };
  deleteComment(){
    if(confirm('You will delete this comment !')){
      this.commentServ.removeComment(this.id);
    }
    this.router.navigateByUrl('/works');
  }
  cancel(){
    this.router.navigateByUrl('/works');
  }

}
