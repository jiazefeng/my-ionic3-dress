import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppService, AppGlobal} from "../../app/app.service";
import {ProductionAddPage} from "../production-add/production-add";

/**
 * Generated class for the ProductionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-production',
  templateUrl: 'production.html',
})
export class ProductionPage {

  productiones: Array<any> = [];
  green: any;
  gId: any;
  params = {
    greenhouseId: '',
    // pageIndex: 1,
    // pageSize: 20
  }

  constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams) {
    this.green = this.navParams.get("green");
    this.params.greenhouseId = this.green.gId;
    this.gId = this.green.gId;
  }

  ionViewDidLoad() {
    this.getProductions();
  }

//获取产量信息
  getProductions() {
    this.appService.httpGet(AppGlobal.API.getProductionList, this.params, rs => {
      this.productiones = rs.data.productionList;
    })
  }

  toAdd() {
    this.navCtrl.push('ProductionAddPage', {greenId: this.gId});
  }
}
