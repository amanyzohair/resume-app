import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(
    private db : AngularFireDatabase
  ) {}
  addComment(comment){
    this.db.list('/comments').push(comment) ;
  }
  update(id:string, editedComment ){
    return this.db.object('/comments/'+ id).update(editedComment);
  }
  removeComment(id:string){
    return this.db.object('/comments/'+ id).remove()
  }
}
