import {Component} from '@angular/core';
import {NavController, IonicPage,ModalController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
// import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public  alertCtrl: AlertController,public modalCtrl:ModalController) {

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
            let modal =this.modalCtrl.create('LoginPage' ,
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
}
