import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ResultantKpiPage } from '../resultantKpi/resultantKpi';
import { MonthToDateDetailPage } from '../monthToDateReport/monthToDateDetail/monthToDateDetail';
import { MidHealthPage } from '../midHealth/midHealth';
import { ChartPage } from '../chart/chart';
import { ReportsPage } from '../reportsReport/reports/reports';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab0Root: any = ReportsPage;
  tab1Root: any = MonthToDateDetailPage;
  tab2Root: any = MidHealthPage;
  tab3Root: any = ResultantKpiPage;
  tab4Root: any = ChartPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
