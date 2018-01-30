import {ThemeableBrowser} from 'ionic-native';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppService, AppGlobal} from "../../app/app.service";
import { DomSanitizer } from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  selectedItem: any;
  imgs: any;
  newsDeatils: Array<any> = [];
  params = {
    newsId: '',
  }

  constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer) {
    this.selectedItem = this.navParams.get("item");
    this.params.newsId = this.selectedItem.newsId;
  }
  ionViewDidLoad() {
    this.getNewsDetails();
  }
  getNewsDetails() {
    this.appService.httpGet(AppGlobal.API.getNewsDetails, this.params, rs => {
      console.log(rs);
      this.newsDeatils = rs.data.newsDetails;
      console.log(this.newsDeatils)
    })
  }
  assembleHTML(strHTML:any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
  goBuy() {
    let options = {
      statusbar: {
        color: '#f8285c'
      },
      toolbar: {
        height: 44,
        color: '#f8285c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
    new ThemeableBrowser(this.selectedItem.ClickUrl, '_blank', options)
  }
}
