import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { slide, smoothFadeIn } from 'src/app/animation/animation';

@Component({
  selector: 'app-filtered-blog',
  templateUrl: './filtered-blog.component.html',
  styleUrls: ['./filtered-blog.component.css'],
  animations:[slide, smoothFadeIn]
})
export class FilteredBlogComponent implements OnInit {
blogId ;
blog;
id;
  constructor(
    private dbServ : DatabaseService,
    private route : ActivatedRoute,
    private router : Router
  ) {
    this.blog=this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dbServ.getBlogById(this.id).subscribe(b=> this.blogId = b)
    });
    
  }

  ngOnInit(): void {
  }

}
