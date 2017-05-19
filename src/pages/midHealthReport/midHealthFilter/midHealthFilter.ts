import { Component } from '@angular/core';
import { AlertController, NavParams, ViewController } from 'ionic-angular';

 
@Component({
  selector: 'page-reportsFilter',
  templateUrl: 'midHealthFilter.html'
})
export class MidHealthFilterPage {

    filterData: any;

    constructor(
        public alertCtrl: AlertController,
        public viewCtrl: ViewController) {

        this.initValues();
    }

    ionViewDidLeave () {
        this.initValues();
    }

    changeStartDate(): void {
        this.filterData.endDate = null;
    }

    applyFilters() {
        if (this.filterData.rangeBy == 'Custom-Range' && (this.filterData.startDate == null || this.filterData.endDate == null)) {
            this.showAlert();
        } else {
            this.dismiss();
        }
    }

    dismiss(data?: any) {
        this.viewCtrl.dismiss(data);
    }    

    private showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Missing Data!',
            subTitle: 'Please select a valid range date!',
            buttons: ['OK']
        });

        alert.present();
    }

    private initValues() {
        this.filterData = {
            'viewBy'    : 'View-All',
            'filterBy'  : 'All',
            'sortBy'    : 'All',
            'rangeBy'   : 'Today',
            'startDate' : null,
            'endDate'   : null
        };
    }

}