import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
// import { ModalContentPage } from 'modalContent';

@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})


export class SupportPage {

  constructor(public modalCtrl: ModalController) {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
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
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Time', note: '8:15 pm' },
          { title: 'Date', note: '17-03-2017' },
          { title: 'Description', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Time', note: '9:20 am' },
          { title: 'Date', note: '09-12-2017' },
          { title: 'Discription', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Time', note: '11:00 am' },
          { title: 'Date', note: '11-09-2017' },
          { title: 'Description', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}