import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from 'src/app/shared/utils/CustomValidators';
import { ICustomCard } from 'src/app/youtube/model/custom-card.model';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';

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
      //Validators.pattern(videoUrlReg),
    ]),
    "creationDate": new FormControl('', [
      Validators.required,
      CustomValidators.dateValidators(),
    ]),
  });

  constructor(
    private dataService: DataService,
    private router: Router
  ) {  }

  submit() {
    if (this.cardCreateForm.valid) {

      const card: ICustomCard = {
        title: this.cardCreateForm.value.title,
        description: this.cardCreateForm.value.description,
        imageLink: this.cardCreateForm.value.imageLink,
        videoLink: this.cardCreateForm.value.videoLink,
        date: this.cardCreateForm.value.creationDate,
      }

      this.dataService.cards.push(card);
      this.dataService.updateCards(this.dataService.cards);
      this.router.navigateByUrl('youtube/custom-cards');
    }
  }
}
