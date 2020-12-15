import { Component } from '@angular/core';
import { progress1, progress3, progress4, slide } from '../animation/animation';
import { progress2 } from './../animation/animation';
import { DatabaseService } from './../services/database.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: [slide, progress1, progress2, progress3, progress4 ]
})
export class ResumeComponent {
  skills$
  education$;
  experience$;
  constructor(
    private dbServ : DatabaseService
  ) { 
    this.skills$ = dbServ.getSkills();
    this.education$ = dbServ.getEducation();
    this.experience$ = dbServ.getExperience();
  }
  
}
