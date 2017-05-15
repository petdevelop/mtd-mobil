import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MonthToDatePage } from '../monthToDateReport/monthToDate/monthToDate';
import { MidHealthPage } from '../midHealth/midHealth';
import { ChartPage } from '../chart/chart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = MonthToDatePage;
  tab2Root: any = MidHealthPage;
  tab3Root: any = AboutPage;
  tab4Root: any = ChartPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
