import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { Firebase } from '@ionic-native/firebase';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
// import { Push } from '@ionic-native/push';
// import { FCM } from '@ionic-native/fcm';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { AboutPage } from '../pages/about/about';
// import { TabsPage } from '../pages/tabs/tabs';
import { SupportPage } from '../pages/support/support';
import { ModalContentPage } from '../pages/support/support';
import { ReversePipe } from '../app/pipes/ReversePipe';
// import { PostPage } from '../pages/post/post';
import { MenuPage } from '../pages/menu/menu';
import { GardenPage } from '../pages/garden/garden';

export const firebaseConfig = {
  apiKey: "AIzaSyC1q1xoaJ61FkyWm2QHgbtFVP-0-ntKyX4",
  authDomain: "green-market-43cfe.firebaseapp.com",
  databaseURL: "https://green-market-43cfe.firebaseio.com",
  storageBucket: "green-market-43cfe.appspot.com",
  messagingSenderId: "597509118435"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // AboutPage,
    MenuPage,
    GardenPage,
    // TabsPage,
    SupportPage,
    ReversePipe,
    // PostPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    HomePage,
    GardenPage,
    // AboutPage,
    // PostPage,
    // TabsPage,
    SupportPage,
    ModalContentPage
  ],
  providers: [
    MenuPage,
    ImagePicker,
    // FCM,
    // Push,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
