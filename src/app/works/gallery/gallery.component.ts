import { Component } from '@angular/core';
import { DatabaseService } from './../../services/database.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  imgUrl$ ;
  constructor(
    private dbServ: DatabaseService
  ) { 
    this.imgUrl$ = dbServ.getGalleryImg();
  }
}
