import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { MonthToDateDetailPage } from '../monthToDateReport/monthToDateDetail/monthToDateDetail';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html'
})
export class SpeakerDetailPage {
  speaker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speaker = this.navParams.data.speaker;
  }

  goToMonthToDateDetail(session: any) {
    this.navCtrl.push(MonthToDateDetailPage, { 
      name: session.name,
      session: session
    });
  }
}
