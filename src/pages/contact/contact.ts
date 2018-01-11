
import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ContactDetailsPage} from "../contact-details/contact-details";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

  constructor(public navCtrl: NavController) {
  }

  goDetails() {
    this.navCtrl.push('ContactDetailsPage');
  }
}
