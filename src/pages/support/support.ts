import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
// import { ModalContentPage } from 'modalContent';

declare var firebase: any;

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})

export class SupportPage {
  notes = [];
  constructor(public modalCtrl: ModalController,public navCtrl: NavController) {

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
      this.notes.push(snapshot.val())
      // console.log(snapshot)
      console.log(this.notes)
    })
  }

  fbPostData(notes,item){
    firebase.database().ref('/').push({name: name, belt: belt});
  }

}

@Component({
  templateUrl:'modalContent.html',
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Tomatoes',
        quote: 'Tomatoes not Potatoes',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Time', note: '8:15 pm' },
          { title: 'Date', note: '17-03-2017' },
          { title: 'Description', note: 'Now $15 a pound.' }
        ]
      },
      {
        name: 'Sweet Pepper',
        quote: 'Sweetest Pepper ever!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Time', note: '9:20 am' },
          { title: 'Date', note: '09-12-2017' },
          { title: 'Discription', note: 'Now $10 a pound' }
        ]
      },
      {
        name: 'Onion',
        quote: 'Sour Onion',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Time', note: '11:00 am' },
          { title: 'Date', note: '11-09-2017' },
          { title: 'Description', note: 'Now $12 a pound' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

