import { Component, Input, OnInit } from '@angular/core';
import { ICustomCard } from '../../model/custom-card.model';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input() public customCard: ICustomCard | null = null;

  public color = '';

  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('');

   }

  ngOnInit(): void {
    if (this.customCard) {
      this.color = this.customCard.date.toString();
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.customCard.videoLink);
    }
  }

}
