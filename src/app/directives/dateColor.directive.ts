import { Directive, ElementRef, Renderer2, Input, Output } from '@angular/core';
import { itemAgeCalculated } from '../utils/itemAgeCalculated-util';

@Directive({
  selector: '[appDateColor]'
})

export class DateColorDirective {

  @Input('appDateColor') public date: string = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.renderBorder(this.date);
  }

  renderBorder(dateStr: string): void {

    const color = this.dateColor(dateStr);

    this.renderer2.setStyle(
      this.elementRef.nativeElement, 'border-bottom', `5px solid ${color}`,
    );
  }

  dateColor(dateString: string): string {
    const itemAge = itemAgeCalculated(dateString);

    return this.colorOfDay(itemAge);;
  }

  colorOfDay(dayCount: number): string {
    const week = 7;
    const month = 31;
    const halfAYear = 184;
    const itemAgeInDay = dayCount;

    if (itemAgeInDay < week) {
      return 'blue';
    }
    if (itemAgeInDay > week && itemAgeInDay <= month) {
      return 'green';
    }
    if (itemAgeInDay > month && itemAgeInDay <= halfAYear) {
      return 'yellow';
    }

    return 'red';

  }

}
