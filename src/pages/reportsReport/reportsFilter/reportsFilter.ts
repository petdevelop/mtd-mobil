import { Component } from '@angular/core';
 
@Component({
  selector: 'page-reportsFilter',
  templateUrl: 'reportsFilter.html'
})
export class ReportsFilterPage {

    endDate: string;
 
    changeStartDate(): void {
        this.endDate = null;
    }

}