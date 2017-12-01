import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GardenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 var timeline = [{
     date: new Date(),
     title: "I am here",
     author: "Ludo Anderson",
     profilePicture: "https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg",
     text: "Lorem ipsum dolor sit amet",
     type: "location"

   }, {
     date: new Date(),
     title: "For my friends",
     author: "Sara Orwell",
     profilePicture: "https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg",
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
     type: "text"

   }, {
     date: new Date(),
     title: "Look at my video!",
     author: "Miranda Smith",
     profilePicture: "https://static.licdn.com/scds/common/u/images/apps/plato/home/photo_profile_headshot_200x200_v2.jpg",
     text: "Lorem ipsum dolor sit amet",
     type: "video"

   }, {
     date: new Date(),
     title: "Awesome picture",
     author: "John Mybeweeg",
     profilePicture: "https://www.lawyersweekly.com.au/images/LW_Media_Library/LW-602-p24-partner-profile.jpg",
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
     type: "picture"
   }]


@IonicPage()
@Component({
  selector: 'page-garden',
  templateUrl: 'garden.html',
})

export class GardenPage {
  activity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activity = timeline[0];
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GardenPage');
  // }

}
