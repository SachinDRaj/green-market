import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
// import { ModalContentPage } from 'modalContent';

declare var firebase: any;
var notes = [];

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})

export class SupportPage {
  items = [];
  constructor(public modalCtrl: ModalController,public navCtrl: NavController) {
    this.items = notes
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

  // writeUserData(userId, name, email, imageUrl) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }

  ngOnInit(){
    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added',(snapshot) => {
      notes.push(snapshot.val())
      console.log(notes)
    })
  }

  // fbPostData(notes,item){
  //   firebase.database().ref('/').push({name: name, belt: belt});
  // }

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

