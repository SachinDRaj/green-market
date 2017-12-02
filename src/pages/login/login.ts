import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

declare var firebase: any;
// registerCredentials = [];
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuPage : MenuPage) {
  }

  registerCredentials = {
    email:'',
    password:''
  }

  login(){
    // const auth = firebase.auth();

    const promise = firebase.auth().signInWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password);
    promise.catch(e => console.log(e.message));

    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     this.menuPage.loggedIn()
    //     // User is signed in.
    //     console.log("logged in")
    //   } else {
    //     // No user is signed in.
    //   }
    // });
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      this.menuPage.loggedIn()
      console.log("logged in")
      this.navCtrl.setRoot(HomePage)
      // console.log(firebaseUser);
    }else{
      // console.log("error logging in")
      // alert("Incorrect Email or Password");
    }
    });

  }


  // loginAnonymously(){
  //   firebase.auth().signInAnonymously().catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  //
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.log("logged in anonymously")
  //       // User is signed in.
  //       // var isAnonymous = user.isAnonymous;
  //       // var uid = user.uid;
  //       // ...
  //     } else {
  //       // User is signed out.
  //       // ...
  //     }
  //     // ...
  //   });
  // }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

}
