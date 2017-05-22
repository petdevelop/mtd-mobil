import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { ConferenceData } from '../../../providers/conference-data';
import { MidHealthFilterPage } from '../midHealthFilter/midHealthFilter';


@Component({
  selector: 'page-midHealth',
  templateUrl: 'midHealth.html'
})
export class MidHealthPage {
  data: Array<any> = [];
  filter: any = null;
  confDate: string;

  constructor(
      public confData: ConferenceData,
      public modalCtrl: ModalController) {

        this.filter = {
            'merchant' : 'View-All',
            'rating' : 'All'
        }
  }

  ionViewDidLoad() {
    this.updateData();
  }

  updateData(query?: string) {
    this.confData.getMidHealth(query).subscribe((data: any) => {
      this.data = data;
    });
  }

  presentFilter() {
    let modal = this.modalCtrl.create(MidHealthFilterPage, {'filter': this.filter});
    modal.present();

    modal.onWillDismiss((data?: any) => {
      this.filter = data;
    });
  }

}
