import {AppShare} from './../../app/app.share';
import {AppService, AppGlobal} from './../../app/app.service';
import {Component} from '@angular/core';
import {NavController, IonicPage, ActionSheetController, LoadingController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  slides: Array<any> = [];
  news: Array<any> = [];

  spinner1: boolean = true;

  params = {
    favoritesId: 2054400,
    pageIndex: 1,
    pageSize: 20
  }

  constructor(public appShare: AppShare, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, public appService: AppService, public navCtrl: NavController) {
    this.getSlides();
  }

  //获取新闻幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getNewsList, params, rs => {
      console.log(rs);
      this.slides = rs.data.carouselList;
      this.news = rs.data.newsDTOList;
      this.spinner1 = false;
    })
    // this.appService.getResources(AppGlobal.API.getSlides, rs => {
    //   console.debug(rs);
    //   this.slides = rs;
    // })
  }

  //获取新闻列表
  // getNews() {
  //   this.appService.getResources(AppGlobal.API.getNews, rs => {
  //     this.news = rs;
  //   })
  // }


  share(event) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享',
      buttons: [
        {
          text: 'QQ好友',
          handler: () => {
            this.appShare.qqShare(0)
          }
        },
        {
          text: 'QQ空间',
          handler: () => {
            this.appShare.qqShare(1)
          }
        },
        {
          text: '微信好友',
          handler: () => {
            this.appShare.wxShare(0)
          }
        },
        {
          text: '朋友圈',
          handler: () => {
            this.appShare.wxShare(1)
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}

