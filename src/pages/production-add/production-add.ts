import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppService, AppGlobal} from "../../app/app.service";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the ProductionAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-production-add',
  templateUrl: 'production-add.html',
})
export class ProductionAddPage {
  result: any;
  yield: string;
  greenhouseId: string;

  constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams) {
    this.greenhouseId = this.navParams.get("greenId");
  }

  ionViewDidLoad() {
    // this.toAdd();
    // console.log('ionViewDidLoad ProductionAddPage');
  }

//添加信息
  toAdd() {
    this.appService.httpGet(AppGlobal.API.toAddProduction, {
      "yield": this.yield,
      "greenhouseId": this.greenhouseId
    }, rs => {
      this.result = rs.data.string;
      if (this.result == "success") {
        this.navCtrl.push('ContactPage');
      }
    })
  }
}
