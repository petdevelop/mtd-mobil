import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { ResultantKpiPage } from '../pages/resultantKpi/resultantKpi';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { MonthToDatePage } from '../pages/monthToDateReport/monthToDate/monthToDate';
import { MidHealthPage } from '../pages/midHealth/midHealth';
import { SupportPage } from '../pages/support/support';
import { ChartPage } from '../pages/chart/chart';
import { ReportsFilterPage } from '../pages/reportsReport/reportsFilter/reportsFilter';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // store the pages of the menu depending on the logged in status
  isLoggedIn: boolean = false;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Reports', name: 'TabsPage', component: TabsPage, tabComponent: ReportsFilterPage, index: 0, icon: 'flash' },
    { title: 'Month-to-Date', name: 'TabsPage', component: TabsPage, tabComponent: MonthToDatePage, index: 1, icon: 'calendar' },
    { title: 'MID Health', name: 'TabsPage', component: TabsPage, tabComponent: MidHealthPage, index: 2, icon: 'contacts' },
    { title: 'Resultant KPI', name: 'TabsPage', component: TabsPage, tabComponent: ResultantKpiPage, index: 3, icon: 'alarm' },
    { title: 'MAC Reports', name: 'TabsPage', component: TabsPage, tabComponent: ChartPage, index: 4, icon: 'analytics' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public confData: ConferenceData,
    public storage: Storage,
    public splashScreen: SplashScreen
  ) {

    // set tabs as root page
    this.rootPage = TabsPage;

    // load the conference data
    confData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      if (hasLoggedIn === true) {
        this.isLoggedIn = true;
      }
    });

    this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    // Set the root of the nav with params if it's a tab index
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userData.logout();
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.isLoggedIn = true;
    });

    this.events.subscribe('user:signup', () => {
      this.isLoggedIn = true;
    });

    this.events.subscribe('user:logout', () => {
      this.isLoggedIn = false;
      this.nav.setRoot('LoginPage');
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'leftMenu');
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'danger';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'danger';
    }
    return;
  }
}
