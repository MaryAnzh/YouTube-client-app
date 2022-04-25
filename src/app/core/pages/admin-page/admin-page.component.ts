import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})


export class AdminPageComponent {
  cardCreateForm: FormGroup = new FormGroup({
    "title": new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    "description": new FormControl('', [
      Validators.required,
      Validators.maxLength(225),
    ]),
    "imageLink": new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
    "videoLink": new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
    "creationDate": new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
  });
}
