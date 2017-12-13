import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

declare var firebase: any;
// registerCredentials = [];
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuPage : MenuPage,public toastCtrl: ToastController) {
  }

  registerCredentials = {
    email:'',
    password:''
  }

  login(){
    // const auth = firebase.auth();

    const promise = firebase.auth().signInWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password);
    promise.catch(e => {
      console.log(e.message)
      let toast = this.toastCtrl.create({
        message: 'Incorrect Email or Password.',
        duration: 3000
      });
      toast.present();

    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      console.log("logged in")
      this.afterLogIn()

    }else if(!firebaseUser){
      // console.log("error logging in.")
    }
    });

  }

  afterLogIn(){
    this.menuPage.loggedIn()
    // console.log("logged in")
    this.navCtrl.setRoot(HomePage)
    let toast = this.toastCtrl.create({
      message: 'Logged in as Admin.',
      duration: 3000
    });
    toast.present();
  }


  loginAnonymously(){
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser){
        console.log("Logged in Anonymously")
        this.afterLogIn2()
      }else if(!firebaseUser){
        // console.log("error logging in.")
      }
    });
      // ...
  }

  afterLogIn2(){
    this.menuPage.loggedIn2()
    // console.log("logged in")
    this.navCtrl.setRoot(HomePage)
    let toast = this.toastCtrl.create({
      message: 'Logged in Anonymously.',
      duration: 3000
    });
    toast.present();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

}
