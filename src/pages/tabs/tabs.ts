import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ResultantKpiPage } from '../resultantKpi/resultantKpi';
import { MonthToDatePage } from '../monthToDateReport/monthToDate/monthToDate';
import { MidHealthPage } from '../midHealth/midHealth';
import { ChartPage } from '../chart/chart';
import { ReportsFilterPage } from '../reportsReport/reportsFilter/reportsFilter';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab0Root: any = ReportsFilterPage;
  tab1Root: any = MonthToDatePage;
  tab2Root: any = MidHealthPage;
  tab3Root: any = ResultantKpiPage;
  tab4Root: any = ChartPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
