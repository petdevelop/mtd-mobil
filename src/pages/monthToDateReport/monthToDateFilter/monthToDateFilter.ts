import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { ConferenceData } from '../../../providers/conference-data';


@Component({
  selector: 'page-monthToDateFilter',
  templateUrl: 'monthToDateFilter.html'
})
export class MonthToDateFilterPage {
  tracks: Array<{name: string, isChecked: boolean}> = [];
  chargebacksRange: number = 0;
  alertsRange: number = 0;

  constructor(
    public confData: ConferenceData,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

    this.confData.getTracks().subscribe((trackNames: string[]) => {

      trackNames.forEach(trackName => {
        this.tracks.push({
          name: trackName,
          isChecked: false
        });
      });

    });
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}
