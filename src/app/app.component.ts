import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { sideBar, slide } from './animation/animation';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slide, sideBar]
})
export class AppComponent {
  controller: boolean = false ;
  public user$: Observable<firebase.User> ;
  meta$ : Observable<any> ;
  

  constructor(
    public dialog: MatDialog,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState;
    if(this.user$){
      this.router.navigateByUrl('/about')
    }
  };
  @ViewChild("mainContent")
  private mainContentDiv!: ElementRef<HTMLElement>;
  
  public hidden: boolean = true;
  logOut() {
    this.afAuth.signOut()
  }

  // to reset the scroll
  onActivate(_event: any): void {
    if (this.mainContentDiv) {
      (this.mainContentDiv.nativeElement as HTMLElement).scrollTo(0, 0)
    };
  };

  downloadCV(){
    var storage = firebase.storage() ;
    var storageRef = storage.ref('Amany_Zohair_CV.pdf') ;
    storageRef.getDownloadURL().then(function(url) {
      // `url` is the download URL for'CV'

      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
    })
  }
  
}
