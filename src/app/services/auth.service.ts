import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

export class AuthService {
  
  constructor( private afAuth: AngularFireAuth ) {
    afAuth.authState.subscribe(u=>console.log(u))
  }
  logInGoogle(){
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
}
