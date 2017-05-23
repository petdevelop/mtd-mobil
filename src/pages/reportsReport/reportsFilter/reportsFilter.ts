import { Component } from '@angular/core';
import { AlertController, ViewController } from 'ionic-angular';

 
@Component({
  selector: 'page-reportsFilter',
  templateUrl: 'reportsFilter.html'
})
export class ReportsFilterPage {

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
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
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