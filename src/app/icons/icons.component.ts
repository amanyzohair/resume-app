import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  icons$ ;
  constructor(
    private dbServ: DatabaseService,
  ) { 
    this.icons$ = dbServ.getIcons();
  }

  ngOnInit(): void {
  }

}
