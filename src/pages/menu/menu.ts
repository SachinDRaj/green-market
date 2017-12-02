import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';

declare var firebase: any;

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  ifSignedIn = false;

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  public pages: PageInterface[] = [
    {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'Notifications', pageName: 'TabsPage', tabComponent: 'SupportPage', index: 1, icon: 'notifications'},
    {title: 'Garden', pageName: 'TabsPage', tabComponent: 'GardenPage', index: 2, icon: 'ios-flower'},
    {title: 'About', pageName: 'AboutPage', icon: 'information-circle'},
    {title: 'Login', pageName: 'LoginPage', icon: 'ios-lock'},
    // {title: 'Post', pageName: 'PostPage', icon: 'ios-add'},
  ]



  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  loggedIn(){
      this.ifSignedIn = true;
      this.pages =[
        {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
        {title: 'Notifications', pageName: 'TabsPage', tabComponent: 'SupportPage', index: 1, icon: 'notifications'},
        {title: 'Garden', pageName: 'TabsPage', tabComponent: 'GardenPage', index: 2, icon: 'ios-flower'},
        {title: 'About', pageName: 'AboutPage', icon: 'information-circle'},
        {title: 'Post', pageName: 'PostPage', icon: 'ios-add'},
      ]
  }

  signOut(){
      this.ifSignedIn = false;
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("sign out")
        // this.menuPage.signedOut()
      }).catch(function(error) {
        console.log("error signing out")
        // An error happened.
      });

      this.pages =[
        {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
        {title: 'Notifications', pageName: 'TabsPage', tabComponent: 'SupportPage', index: 1, icon: 'notifications'},
        {title: 'Garden', pageName: 'TabsPage', tabComponent: 'GardenPage', index: 2, icon: 'ios-flower'},
        {title: 'About', pageName: 'AboutPage', icon: 'information-circle'},
        {title: 'Login', pageName: 'LoginPage', icon: 'ios-lock'},
      ]
  }


  openPage(page: PageInterface){
    let params = {};

    if(page.index){
      params = {tabIndex: page.index};
    }
    let items = this.nav.getActiveChildNavs();
    if(items[0] && page.index !=undefined) {
      items[0].select(page.index);
      // this.nav.getActiveChildNav().select(page.index);
    }else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNavs();
    // console.log(childNav);
    if (childNav[0]){
      if (childNav[0].getSelected() && childNav[0].getSelected().index === page.index) {
        return 'primary';
      }
      return;
    }

    if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MenuPage');
  // }

}
