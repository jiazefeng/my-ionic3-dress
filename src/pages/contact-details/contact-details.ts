import {AppService, AppGlobal} from './../../app/app.service';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {EnvironmentalFactorsPage} from "../environmental-factors/environmental-factors";

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
  green: any;
  params = {
    gId: '',
    // pageIndex: 1,
    // pageSize: 20
  }

  constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.green = this.navParams.get("green");
    this.params.gId = this.green.gId;
    // this.getPlants();
  }

  ionViewDidLoad() {
    this.getPlants();
    // console.log('ionViewDidLoad ProductListPage');
  }

  //获取植物生长记录信息
  getPlants() {
    // this.appService.getResources(AppGlobal.API.getPlants, rs => {
    //   this.plants = rs;
    // })
    this.appService.httpGet(AppGlobal.API.getGreenhouseDetail, this.params, rs => {
      console.log(rs);
      this.plants = rs.data.greenhouseDetailDTOList;
      console.log(this.plants)
    })
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: '阈值设置',
      // message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'minTemp',
          placeholder: '空气温度',
          type: 'number'
        }, {
          name: 'maxTemp',
          placeholder: '空气湿度',
          type: 'number'
        }
        , {
          name: 'maxTemp',
          placeholder: '土壤温度',
          type: 'number'
        }, {
          name: 'maxTemp',
          placeholder: 'CO2浓度',
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
          text: '保存',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  ionViewDidEnter() {
    this.yieldCharts();
  }

  yieldCharts() {
    let date = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    let ctx = this.container.nativeElement;
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(ctx);

    let option = {
      title: {
        text: '产量变化',
        textStyle: {
          fontSize: 14,
        },
        x: 'center',
        align: 'right'
      },
      grid: {
        x: 50,
        // y: 40,
        x2: 30,
        y2: 40,
        bottom: 80
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          animation: false,
          label: {
            backgroundColor: '#505765'
          }
        }
      },
      legend: {
        data: ['产量'],
        padding: [
          5,  // 上
          5, // 右
          0,  // 下
          0, // 左
        ],
        x: 'left'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        name: '产量(KG)',
        type: 'value',
        max: 10000
      },
      series: [{
        name: '产量',
        type: 'line',
        stack: '总量',
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [2800, 4800, 4000, 1900, 9600, 2700, 1000]
      }]
    }
    this.chart.setOption(option);
  }

  toEnvironmentalFactorsPage(id) {
    this.navCtrl.push('EnvironmentalFactorsPage', {'id': id});
  }
}
