import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { FCM } from '@ionic-native/fcm';

// import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';

// declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // fcm.getToken(
      //   (t) => {
      //     console.log(t);
      //   },
      //   (e) => {
      //     console.log(e);
      //   }
      // );
      //
      // fcm.onNotification(
      //   (data) => {
      //     console.log(data);
      //   },
      //   (e) => {
      //     console.log(e);
      //   }
      // );
      // this.pushsetup();
    });
  }

  // pushsetup() {
  //   const options: PushOptions = {
  //      android: {
  //          SENDER_ID: '597509118435'
  //      },
  //      ios: {
  //          alert: 'true',
  //          badge: true,
  //          sound: 'false'
  //      },
  //      windows: {}
  //   };
  //
  //   const pushObject: PushObject = this.push.init(options);
  //
  //   pushObject.on('notification').subscribe((notification: any) => {
  //     if (notification.additionalData.foreground) {
  //       let youralert = this.alertCtrl.create({
  //         title: 'New Push notification',
  //         message: notification.message
  //       });
  //       youralert.present();
  //     }
  //   });
  //
  //   pushObject.on('registration').subscribe((registration: any) => {
  //     alert(registration.registrationId);
  //   });
  //
  //   pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  // }
}
