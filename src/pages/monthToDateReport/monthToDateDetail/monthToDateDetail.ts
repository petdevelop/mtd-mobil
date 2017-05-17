import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { ConferenceData } from '../../../providers/conference-data';
import { MonthToDateCardPage } from '../monthToDateCard/monthToDateCard';
import { MonthToDatePage } from '../monthToDate/monthToDate';

@Component({
  selector: 'page-monthToDateDetail',
  templateUrl: 'monthToDateDetail.html',
  providers: [MonthToDateCardPage]
})

export class MonthToDateDetailPage {
  domestic: any = [];
  offshore: any = [];
  date: string;
  location: string = '';
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  groups: any = [];
  confDate: string;

  constructor(
      public confData: ConferenceData,
      public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.updateMonthToDate();
  }

  ionViewDidEnter() {
    this.location = 'domestic';
  }

  updateMonthToDate() {
     this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.groups = data.groups;
      // today
      this.domestic = this.groups[0].sessions[0].segments.domestic;
      this.offshore = this.groups[0].sessions[0].segments.offshore;
    });
  }

  presentFilter() {
    let modal = this.modalCtrl.create(MonthToDatePage/*, this.excludeTracks*/);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateMonthToDate();
      }
    });

  }

}
