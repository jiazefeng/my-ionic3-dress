import {Component} from '@angular/core';
import {NavController, IonicPage, ModalController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SetUpPage} from "../set-up/set-up";
import {AppDescPage} from "../app-desc/app-desc";

// import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public  alertCtrl: AlertController, public modalCtrl: ModalController) {

  }

  loginOut() {
    let confirm = this.alertCtrl.create({
      title: '退出系统',
      message: '确定要退出系统！！！',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '同意',
          handler: () => {
            let modal = this.modalCtrl.create('LoginPage',
              // { id:123,name: "Carl"}
            );
            modal.present();
            // this.modelCtrl.push('LoginPage');
          }
        }
      ]
    });
    confirm.present();
  }

  resetPassword() {
    let resetPass = this.alertCtrl.create({
      title: '重置密码',
      // message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'minTemp',
          placeholder: '新密码',
          type: 'number'
        }, {
          name: 'maxTemp',
          placeholder: '确认密码',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            this.navCtrl.push("LoginPage");
          }
        }
      ]
    });
    resetPass.present();
  }

  clearCache() {
    let clearCache = this.alertCtrl.create({
      title: '清除缓存',
      message: "确定要清除所有缓存！",
      buttons: [{
        text: '取消',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
        {
          text: '确定',
          handler: data => {
            // this.navCtrl.push("LoginPage");
          }
        }]
    });
    clearCache.present();
  }

  setUp() {
    this.navCtrl.push('SetUpPage');
  }

  appDesc() {
    this.navCtrl.push('AppDescPage');
  }
}
