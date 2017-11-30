import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { Firebase } from '@ionic-native/firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { AboutPage } from '../pages/about/about';
// import { TabsPage } from '../pages/tabs/tabs';
import { SupportPage } from '../pages/support/support';
import { ModalContentPage } from '../pages/support/support';
import { ReversePipe } from '../app/pipes/ReversePipe';
// import { PostPage } from '../pages/post/post';
import { MenuPage } from '../pages/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // AboutPage,
    MenuPage,
    // TabsPage,
    SupportPage,
    ReversePipe,
    // PostPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    HomePage,
    // AboutPage,
    // PostPage,
    // TabsPage,
    SupportPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
