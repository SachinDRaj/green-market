import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  registerCredentials = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){

  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

}
