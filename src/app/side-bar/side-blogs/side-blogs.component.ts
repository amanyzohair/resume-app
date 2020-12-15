import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'side-blogs',
  templateUrl: './side-blogs.component.html',
  styleUrls: ['./side-blogs.component.css']
})
export class SideBlogsComponent implements OnInit {

  blogs$;
  constructor(
    private dbServ : DatabaseService,
    private router : Router
  ) {
    this.blogs$ = this.dbServ.getBlogs();
    }
  viewBlog(id){
    this.router.navigate(['/blog/filterd-blog', id]);
  }
  ngOnInit(): void {
  }

}
