import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-resultantKpi',
  templateUrl: 'resultantKpi.html'
})
export class ResultantKpiPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }


}
