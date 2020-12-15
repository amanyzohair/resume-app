import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  public user$: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.user$ = this.afAuth.authState
  }
  logInGoogle(){
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
