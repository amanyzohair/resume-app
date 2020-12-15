import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent  {

  constructor() { }

  socialWork = [
    {'imgSrc': 'https://bslthemes.com/ryan/demo/images/works/work7.jpg', topic:''},
    {'imgSrc': 'https://bslthemes.com/ryan/demo/images/works/work4.jpg', topic:''},
  ]
}
