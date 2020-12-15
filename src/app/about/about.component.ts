import { Component} from '@angular/core';
import { slide } from '../animation/animation';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slide]
})
export class AboutComponent {

  carousel$ ;
  constructor(
    private router: Router,
    private dbServ: DatabaseService ,
  ) { 
    this.carousel$ = dbServ.getCarousel()
  }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };
    
}

