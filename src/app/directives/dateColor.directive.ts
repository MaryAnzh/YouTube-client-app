import { Directive, ElementRef, Renderer2, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDateColor]'
})

export class DateColorDirective {

  @Input('appDateColor') public date: string = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.renderBorder(this.date);
  }

  renderBorder(dateStr: string) {

    const color = this.dateColor(dateStr);

    this.renderer2.setStyle(
      this.elementRef.nativeElement, 'border-bottom', `5px solid ${color}`,
    );
  }

  dateColor(dateString: string): string {
    const itemDate = Date.parse(dateString);
    const date = new Date();
    const itemAgeInMilliseconds = +date - +itemDate;
    const millisecondsInDay = 86400000;
    const itemAgeInDay = (itemAgeInMilliseconds / millisecondsInDay);

    return this.colorOfDay(itemAgeInDay);;
  }

  colorOfDay(dayCount: number): string {
    let color = '';
    const week = 7;
    const manth = 31;
    const halfAYear = 184;
    const itemAgeInDay = dayCount;

    if (itemAgeInDay < week) {
      color = 'blue';
    } else if (itemAgeInDay > week && itemAgeInDay <= manth) {
      color = 'green';
    } else if (itemAgeInDay > manth && itemAgeInDay <= halfAYear) {
      color = 'yellow';
    } else {
      color = 'red';
    }

    return color;
  }

}
