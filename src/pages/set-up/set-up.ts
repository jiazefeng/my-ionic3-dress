import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-set-up',
  templateUrl: 'set-up.html',
})
export class SetUpPage {
  switch: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SetUpPage');
  }

}
