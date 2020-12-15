import { Component, ViewChild, ElementRef } from '@angular/core';
import { fadeIn, slide } from './../animation/animation';
import { DatabaseService } from './../services/database.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations:[slide]
})
export class BlogComponent {
  
  blogs$ ;
  constructor(
    private dbServ: DatabaseService
  ) {
    this.blogs$= this.dbServ.getBlogs()
   }
  currentPage = 1;
  itemsPerPage = 4;
  pageSize: number;
    public onPageChange(pageNum: number): void {
      this.pageSize = this.itemsPerPage*(pageNum - 1);
    };

    
}
