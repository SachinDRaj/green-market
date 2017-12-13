import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
// import { HomePage } from '../home/home';


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



  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {


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

  loggedIn2(){
      this.ifSignedIn = true;
      this.pages =[
        {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
        {title: 'Notifications', pageName: 'TabsPage', tabComponent: 'SupportPage', index: 1, icon: 'notifications'},
        {title: 'Garden', pageName: 'TabsPage', tabComponent: 'GardenPage', index: 2, icon: 'ios-flower'},
        {title: 'About', pageName: 'AboutPage', icon: 'information-circle'},
      ]
  }


  signOut(){
      this.ifSignedIn = false;
      const promise = firebase.auth().signOut();
      promise.catch(e => {
        console.log(e.message)
        console.log("error signing out")

      });

      firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser){
        // this.menuPage.loggedIn()
        console.log("firebaseUser still here")
      }else{
        console.log("Signed out")
        this.afterSignOut()

        // console.log("sign out error")
      }
      });


      this.pages =[
        {title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
        {title: 'Notifications', pageName: 'TabsPage', tabComponent: 'SupportPage', index: 1, icon: 'notifications'},
        {title: 'Garden', pageName: 'TabsPage', tabComponent: 'GardenPage', index: 2, icon: 'ios-flower'},
        {title: 'About', pageName: 'AboutPage', icon: 'information-circle'},
        {title: 'Login', pageName: 'LoginPage', icon: 'ios-lock'},
      ]
  }

  afterSignOut(){
    let toast = this.toastCtrl.create({
      message: 'Signed Out',
      duration: 3000
    });
    toast.present();
    // this.navCtrl.setRoot(HomePage)

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
