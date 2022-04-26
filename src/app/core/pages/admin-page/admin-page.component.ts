import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from 'src/app/shared/utils/CustomValidators';

const imgUrlReg = `(http(s?):)([a-zA-Z0-9-./_]+).(?:jpg|gif|png)`;
const videoUrlReg = `(https:)\/\/(youtu.be/)([a-zA-Z0-9]{10})`;

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
      Validators.maxLength(225),
    ]),
    "imageLink": new FormControl('', [
      Validators.required,
      Validators.pattern(imgUrlReg),
    ]),
    "videoLink": new FormControl('', [
      Validators.required,
      Validators.pattern(videoUrlReg),
    ]),
    "creationDate": new FormControl('', [
      Validators.required,
      customValidators.dateValidators(),
    ]),
  });

  submit() {
    if (this.cardCreateForm.valid) {
      console.log('The cardCreateForm is valid');
    }
  }
}
