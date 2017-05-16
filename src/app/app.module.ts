import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';
import { ResultantKpiPage } from '../pages/resultantKpi/resultantKpi';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MonthToDatePage } from '../pages/monthToDateReport/monthToDate/monthToDate';
import { MonthToDateFilterPage } from '../pages/monthToDateReport/monthToDateFilter/monthToDateFilter';
import { MonthToDateDetailPage } from '../pages/monthToDateReport/monthToDateDetail/monthToDateDetail';
import { SignupPage } from '../pages/signup/signup';
import { MidHealthPage } from '../pages/midHealth/midHealth';
import { TabsPage } from '../pages/tabs/tabs';
import { SupportPage } from '../pages/support/support';
import { ChartPage } from '../pages/chart/chart';
import { MonthToDateCardPage } from '../pages/monthToDateReport/monthToDateCard/monthToDateCard';
import { ReportsPage } from '../pages/reportsReport/reports/reports';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


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
    ReportsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: MonthToDatePage, name: 'MonthToDate', segment: 'monthToDate' },
        { component: MonthToDateDetailPage, name: 'MonthToDateDetail', segment: 'sessionDetail/:name' },
        { component: MonthToDateFilterPage, name: 'MonthToDateFilter', segment: 'monthToDateFilter' },
        { component: MidHealthPage, name: 'MidHealth', segment: 'midHealth' },
        { component: ResultantKpiPage, name: 'ResultantKpi', segment: 'resultantKpi' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: ChartPage, name: 'ChartPage', segment: 'chart' },
        { component: MonthToDateCardPage, name: 'MonthToDateCardPage', segment: 'monthToDateCard' },
        { component: ReportsPage, name: 'ReportsPage', segment: 'reports'}
      ]
    }),
    IonicStorageModule.forRoot()
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
    ReportsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
