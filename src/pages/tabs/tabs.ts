import { Component } from '@angular/core';
// import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SupportPage } from '../support/support';
import { GardenPage } from '../garden/garden';


import { NavController,NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SupportPage;
  tab3Root = GardenPage;
  // tab3Root = AboutPage;
  myIndex: number;

  constructor(public navCtr: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }


}
