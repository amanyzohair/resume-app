import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'side-comments',
  templateUrl: './side-comments.component.html',
  styleUrls: ['./side-comments.component.css']
})
export class SideCommentsComponent implements OnInit {
  barComments$;
  hidden = false;
  constructor(
    private dbServ : DatabaseService,
  ) {
    this.barComments$ = this.dbServ.barComments();
  };
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  ngOnInit(): void {
  }

}
