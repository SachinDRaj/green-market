import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var firebase: any;

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  todo = {
    description:'',
    title:'',
    subject:''
  }

  date = new Date();
  // myDate: String = new Date().toISOString();

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  getDate(date){
    var day= date.getDay();
    var month= date.getMonth();
    var temp = date.getYear();
    // var temp = year.parseInt()
    temp = temp-100+2000;
    var year = temp.toString();
    var newDate = day+'/'+month+'/'+year;

    return newDate;
  }

  logForm() {
    var nTime = this.formatAMPM(this.date);
    // this.date = new Date();
    var nDate = this.getDate(this.date);
    // console.log(this.todo)
    console.log(nTime)
    console.log(nDate)

    // firebase.database().ref('/').push({
    //   Date: nDate,
    //   Description: this.todo.description,
    //   Name: this.todo.title,
    //   Quote: this.todo.subject,
    //   Time: nTime
    // });

  }

}
