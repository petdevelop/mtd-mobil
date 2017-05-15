import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-month-to-date-card',
  templateUrl: 'monthToDateCard.html'
})

export class MonthToDateCardPage {
   @Input() data: any;
}
