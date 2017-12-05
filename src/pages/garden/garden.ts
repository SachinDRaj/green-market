import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 var timeline = [{
     date: new Date(),
     title: "I am here",
     author: "Ludo Anderson",
     profilePicture: "assets/imgs/pic5.jpeg",
     text: "Lorem ipsum dolor sit amet",
     type: "location"

   }, {
     date: new Date(),
     title: "For my friends",
     author: "Sara Orwell",
     profilePicture: "assets/imgs/pic3.jpeg",
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
     type: "text"

   }, {
     date: new Date(),
     title: "Look at my video!",
     author: "Miranda Smith",
     profilePicture: "assets/imgs/pic4.jpeg",
     text: "Lorem ipsum dolor sit amet",
     type: "video"

   }, {
     date: new Date(),
     title: "Awesome picture",
     author: "John Mybeweeg",
     profilePicture: "assets/imgs/pic6.jpeg",
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
     type: "picture"
   },]


@IonicPage()
@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})

export class GardenPage {
  activity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activity = timeline;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GardenPage');
  // }

}
