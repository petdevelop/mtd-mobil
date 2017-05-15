import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MonthToDatePage } from '../pages/monthToDateReport/monthToDate/monthToDate';
import { MonthToDateFilterPage } from '../pages/monthToDateReport/monthToDateFilter/monthToDateFilter';
import { MonthToDateDetailPage } from '../pages/monthToDateReport/monthToDateDetail/monthToDateDetail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { MidHealthPage } from '../pages/midHealth/midHealth';
import { TabsPage } from '../pages/tabs/tabs';
import { SupportPage } from '../pages/support/support';
import { ChartPage } from '../pages/chart/chart';
import { MonthToDateCardPage } from '../pages/monthToDateReport/monthToDateCard/monthToDateCard';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    MonthToDatePage,
    MonthToDateFilterPage,
    MonthToDateDetailPage,
    SignupPage,
    SpeakerDetailPage,
    MidHealthPage,
    TabsPage,
    SupportPage,
    ChartPage,
    MonthToDateCardPage
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
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: ChartPage, name: 'ChartPage', segment: 'chart' },
        { component: MonthToDateCardPage, name: 'MonthToDateCardPage', segment: 'monthToDateCardPage' },
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    MonthToDatePage,
    MonthToDateFilterPage,
    MonthToDateDetailPage,
    SignupPage,
    SpeakerDetailPage,
    MidHealthPage,
    TabsPage,
    SupportPage,
    ChartPage
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
