import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-midHealthCard',
  templateUrl: 'midHealthCard.html'
})
export class MidHealthCardPage {
    cardData: any[] = [];

    constructor(
        public navParams: NavParams) {

        let data = this.navParams.get('data');

        Object.keys(data).filter((key: string) => {
            let trimKey = key.replace('_', ' ');
            let words = trimKey.split(' ');
            let wordsCap = words.map((value => {
                return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
            }));
            let wordsCapArray = wordsCap.join(' ');

            this.cardData.push({'key': wordsCapArray, 'value': data[key]});
        });
    }
   
}