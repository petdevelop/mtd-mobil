import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { ConferenceApp } from './app.component';
import { ResultantKpiPage } from '../pages/resultantKpi/resultantKpi';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MonthToDatePage } from '../pages/monthToDateReport/monthToDate/monthToDate';
import { MonthToDateFilterPage } from '../pages/monthToDateReport/monthToDateFilter/monthToDateFilter';
import { MonthToDateDetailPage } from '../pages/monthToDateReport/monthToDateDetail/monthToDateDetail';
import { SignupPage } from '../pages/signup/signup';
import { MidHealthPage } from '../pages/midHealthReport/midHealth/midHealth';
import { MidHealthFilterPage } from '../pages/midHealthReport/midHealthFilter/midHealthFilter';
import { MidHealthCardPage } from '../pages/midHealthReport/midHealthCard/midHealthCard';
import { TabsPage } from '../pages/tabs/tabs';
import { SupportPage } from '../pages/support/support';
import { ChartPage } from '../pages/chart/chart';
import { MonthToDateCardPage } from '../pages/monthToDateReport/monthToDateCard/monthToDateCard';
import { ReportsPage } from '../pages/reportsReport/reports/reports';
import { ReportsFilterPage } from '../pages/reportsReport/reportsFilter/reportsFilter';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '474dea79'
  },
  'push': {
    'sender_id': '899714556342',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#f53d3d'
      }
    }
  }
};


@NgModule({
  declarations: [
    ConferenceApp,
    ResultantKpiPage,
    AccountPage,
    LoginPage,
    MonthToDatePage,
    MonthToDateFilterPage,
    MonthToDateDetailPage,
    SignupPage,
    MidHealthPage,
    TabsPage,
    SupportPage,
    ChartPage,
    MonthToDateCardPage,
    ReportsPage,
    ReportsFilterPage,
    MidHealthFilterPage,
    MidHealthCardPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        // { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        // { component: MonthToDatePage, name: 'MonthToDate', segment: 'monthToDate' },
        // { component: MonthToDateDetailPage, name: 'MonthToDateDetail', segment: 'monthToDateDetailDetail' },
        // { component: MonthToDateFilterPage, name: 'MonthToDateFilter', segment: 'monthToDateFilter' },
        // { component: MidHealthPage, name: 'MidHealth', segment: 'midHealth' },
        // { component: ResultantKpiPage, name: 'ResultantKpi', segment: 'resultantKpi' },
        // { component: SupportPage, name: 'SupportPage', segment: 'support' },
        // { component: LoginPage, name: 'LoginPage', segment: 'login' },
        // { component: AccountPage, name: 'AccountPage', segment: 'account' },
        // { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        // { component: ChartPage, name: 'ChartPage', segment: 'chart' },
        // { component: MonthToDateCardPage, name: 'MonthToDateCardPage', segment: 'monthToDateCard' },
        // { component: ReportsPage, name: 'ReportsPage', segment: 'reports'},
        // { component: ReportsFilterPage, name: 'ReportsFilterPage', segment: 'reportsFilter'},
        // { component: MidHealthFilterPage, name: 'MidHealthFilterPage', segment: 'midHealthFilterPage'},
        // { component: MidHealthFilterPage, name: 'MidHealthFilterPage', segment: 'midHealthFilterPage'},
        // MidHealthCardPage
        
      ]
    }),
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    ResultantKpiPage,
    AccountPage,
    LoginPage,
    MonthToDatePage,
    MonthToDateFilterPage,
    MonthToDateDetailPage,
    SignupPage,
    MidHealthPage,
    TabsPage,
    SupportPage,
    ChartPage,
    ReportsPage,
    ReportsFilterPage,
    MidHealthFilterPage,
    MidHealthCardPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    StatusBar
  ]
})
export class AppModule { }
