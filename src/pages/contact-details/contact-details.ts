import {AppService, AppGlobal} from './../../app/app.service';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

declare var echarts;

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {
  @ViewChild('container') container: ElementRef;
  chart: any;
  plants: Array<any> = [];

  constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.getPlants();
  }

  //获取植物生长记录信息
  getPlants() {
    this.appService.getResources(AppGlobal.API.getPlants, rs => {
      this.plants = rs;
    })
  }
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: '设置温度',
      // message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'minTemp',
          placeholder: '最低温度',
          type:'number'
        },{
          name: 'maxTemp',
          placeholder: '最高温度',
          type:'number'
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
          text: '保存',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      title: {
        text: '气温变化'
      },
      // color: ['#3398DB'],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        x: 'right',
        data: ['最高气温', '最低气温']
      },
      grid: {
        x: 40,
        y: 80,
        x2: 40,
        y2: 50,
        borderWidth: 0
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: '最高气温',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: '最低气温',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        }
      ]
    });
  }
}
