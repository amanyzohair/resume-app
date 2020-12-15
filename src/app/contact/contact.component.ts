import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { slide, fadeIn, fadeOut } from '../animation/animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[slide, fadeIn, fadeOut]
})
export class ContactComponent {

  constructor() { }
form = new FormGroup({
  emailFormControl : new FormControl('',[
    Validators.required,
    Validators.email
  ]),
  messageFormControl : new FormControl('',[
    Validators.required,
  ])
})

  hide = true;
  lat = 30.0444;
  lng = 31.2357;
  defaultValue='messageForm';
  sendMsessage(selectedView){
    this.defaultValue=selectedView;
  }
}
