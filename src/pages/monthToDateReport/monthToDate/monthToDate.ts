import { Component, ViewChild } from '@angular/core';
import { AlertController, App, FabContainer, ItemSliding, List, ToastController, LoadingController, Refresher, ViewController, ModalController } from 'ionic-angular';

import { ConferenceData } from '../../../providers/conference-data';
import { UserData } from '../../../providers/user-data';


@Component({
  selector: 'page-monthToDate',
  templateUrl: 'monthToDate.html'
})
export class MonthToDatePage {
  // the list is a child of the monthToDate page
  // @ViewChild('monthToDateList') gets a reference to the list
  // with the variable #monthToDateList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('monthToDateList', { read: List }) 
  monthToDateList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  selectedDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,    
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public user: UserData,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('MonthToDate');
    this.updateMonthToDate();
  }

  updateMonthToDate() {
    // Close any open sliding items when the monthToDate updates
    this.monthToDateList && this.monthToDateList.closeSlidingItems();

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  addFavorite(slidingItem: ItemSliding, sessionData: any) {

    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      let alert = this.alertCtrl.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      alert.present();
    }

  }

  removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateMonthToDate();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  }

  openSocial(network: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }

  doRefresh(refresher: Refresher) {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;

      // simulate a network request that would take longer
      // than just pulling from out local json file
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'Sessions have been updated.',
          duration: 3000
        });
        toast.present();
      }, 1000);
    });
  }

  applyFilters(month?: number, year?: number, session?: any) {
    session.month = month;
    session.year = year; 
    this.dismiss(session);
  }

  dismiss(session?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(session);
  }

  selectDate(): void {
    // pass some info to parent
    this.dismiss();   
  }


}
