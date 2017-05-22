import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-midHealthFilter',
  templateUrl: 'midHealthFilter.html'
})
export class MidHealthFilterPage {

    filterData: any;

    constructor(
        public viewCtrl: ViewController,
        public navParams: NavParams) {

        this.filterData = this.navParams.get('filter');
    }

    dismiss() {
        this.viewCtrl.dismiss(this.filterData);
    }    
}