import { Component, ViewChild } from '@angular/core';
import { Slides, NavParams } from 'ionic-angular';

import { MonthToDateCardPage } from '../monthToDateCard/monthToDateCard';

@Component({
  selector: 'page-monthToDateDetail',
  templateUrl: 'monthToDateDetail.html',
  providers: [MonthToDateCardPage]
})

export class MonthToDateDetailPage {
  params: any;
  location: string = '';

  @ViewChild('slides') slides: Slides;

  constructor(public navParams: NavParams) {
    this.params = navParams.data.session;
  }

  ionViewWillEnter() {
    this.location = 'domestic';
  }

}
