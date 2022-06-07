import { Component, Input, OnInit } from '@angular/core';
import { ICustomCard } from '../../model/custom-card.model';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input() public customCard: ICustomCard | null = null;

  public color = '';

  safeSrc: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private store: Store) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('');

   }

  ngOnInit(): void {
    if (this.customCard) {
      this.color = this.customCard.date.toString();
      const url = this.changeURL(this.customCard.videoLink);
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  changeURL(url: string): string {
    const videoId = url.substring(url.indexOf('e/') + 2);
    const iftameBaseURL = 'https://www.youtube.com/embed/';
    console.log(iftameBaseURL + videoId);
    return iftameBaseURL + videoId;
  }

}
