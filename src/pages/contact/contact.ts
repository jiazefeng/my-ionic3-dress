import {AppService, AppGlobal} from './../../app/app.service';
import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController} from 'ionic-angular';
import {ContactDetailsPage} from "../contact-details/contact-details";
import {ProductionPage} from "../production/production";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  @ViewChild(Navbar) navBar: Navbar;
  greenhouses: Array<any> = [];
  params = {
    // favoritesId: 2054400,
    pageIndex: 1,
    pageSize: 20
  }

  constructor(public appService: AppService, public navCtrl: NavController) {
    this.getGreenhouses()
  }

  //获取大棚类别
  getGreenhouses() {
    this.appService.httpGet(AppGlobal.API.getGreenhouse, this.params, rs => {
      this.greenhouses = rs.data;
    })
  }

//大棚详情
  goDetails(green) {
    this.navCtrl.push('ContactDetailsPage', {green: green});
  }

  //产量
  goProduction(green) {
    this.navCtrl.push('ProductionPage', {green: green});
  }
}
