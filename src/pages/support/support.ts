import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
// import { ReversePipe } from '../app/pipes/ReversePipe';

declare var firebase: any;
var notes = [];

@Component({
  selector: 'page-support',
  templateUrl: 'support.html'
  // pipes: [ReversePipe]
})


export class SupportPage {
  items = [];
  constructor(public modalCtrl: ModalController,public navCtrl: NavController) {

  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }


  ngOnInit(){
    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added',(snapshot) => {
      notes.push(snapshot.val())
      // notes.reverse()
      this.items = notes;
      // console.log(notes)
    })
  }


}

@Component({
  templateUrl:'modalContent.html',
})
export class ModalContentPage {
  character;

  constructor(public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {

    this.character = notes[this.params.get('charNum')];
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
}

