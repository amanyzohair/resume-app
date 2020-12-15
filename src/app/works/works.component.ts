import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fadeIn, slide, smoothFadeIn } from '../animation/animation';
import { DatabaseService } from '../services/database.service';
import { GalleryComponent } from './gallery/gallery.component';
import { MusicComponent } from './music/music.component';
import { SocialComponent } from './social/social.component';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { CommentService } from './../services/comment.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [slide, fadeIn, smoothFadeIn]
})
export class WorksComponent  {
  comments$;
  constructor(
    public dialog: MatDialog,
    private dbServ: DatabaseService,
    private activRoute: ActivatedRoute,
    private commentServ: CommentService,
    
     ) {
       this.comments$ = this.dbServ.getComment();
     }
  openGalleryDialog(){
    this.dialog.open(GalleryComponent, {
      panelClass: ''})
  };
  openVideoDialog(){
    this.dialog.open(VideoDialogComponent , {
      panelClass: ''})
  };
  openMusicDialog(){
    this.dialog.open(MusicComponent) ;
  };
  openSocialDialog(){
    this.dialog.open(SocialComponent) ;
  }
  gallery = [
    {'galleryImg': 'https://bslthemes.com/ryan/demo/images/works/work1.jpg',  },
    {'galleryImg': 'https://bslthemes.com/ryan/demo/images/works/work5.jpg', },
  ];

  videos = [
    {'videoImg':'https://bslthemes.com/ryan/demo/images/works/work6.jpg', },
    {'videoImg':'https://bslthemes.com/ryan/demo/images/works/work2.jpg', },
  ];
  music = [
    {'musicImg': 'https://bslthemes.com/ryan/demo/images/works/work8.jpg', },
    {'musicImg': 'https://bslthemes.com/ryan/demo/images/works/work3.jpg', },
  ];
  social = [
    {'socialImg': 'https://bslthemes.com/ryan/demo/images/works/work7.jpg'},
    {'socialImg': 'https://bslthemes.com/ryan/demo/images/works/work4.jpg'},
  ];
  
}
