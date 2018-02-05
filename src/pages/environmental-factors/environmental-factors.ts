import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

declare var echarts;

@IonicPage()
@Component({
  selector: 'page-environmental-factors',
  templateUrl: 'environmental-factors.html',
})
export class EnvironmentalFactorsPage {
  @ViewChild('container') container: ElementRef;
  id: any;
  chart: any;
  timeData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get("id");
    this.timeData = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  }


  ionViewDidLoad() {
    if (this.id == 1) {
      this.wendu();
    }
    if (this.id == 2) {
      this.shidu();
    }
    if (this.id == 3) {
      this.shuifen();
    }
    if (this.id == 4) {
      this.CO2();
    }
  }

  wendu() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      title: {
        text: '空气温度变化',
        x: 'center',
        align: 'right',
        textStyle: {
          fontSize: 14,
        }
      },
      grid: {
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
        x: 'left',
        data: ['空气温度']
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 40,
          end: 70
        },
        {
          type: 'inside',
          realtime: true,
          start: 40,
          end: 70
        }
      ],
      xAxis: [
        {
         // name:'时间',
          type: 'category',
          boundaryGap: false,
          axisLine: {onZero: false},
          data: this.timeData
        }
      ],
      yAxis: [
        {
          name: '温度(℃)',
          type: 'value',
          max: 30
        }
      ],
      series: [
        {
          name: '空气温度',
          type: 'line',
          animation: false,
          areaStyle: {
            normal: {}
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          markArea: {
            silent: true,
            data: [[{
              xAxis: '7:00'
            }, {
              xAxis: '21:00'
            }]]
          },
          data: [7,8,7,8,7,7,8,8,10,12,15,20,22,25,23,20,18,16,14,13,12,10,9, 8,7],
        }
      ]
    });
  }

  shidu() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      title: {
        text: '空气湿度变化',
        x: 'center',
        align: 'right',
        textStyle: {
          fontSize: 14,
        }
      },
      grid: {
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
        x: 'left',
        data: ['空气湿度']
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 40,
          end: 70
        },
        {
          type: 'inside',
          realtime: true,
          start: 40,
          end: 70
        }
      ],
      xAxis: [
        {
          // name:'时间',
          type: 'category',
          boundaryGap: false,
          axisLine: {onZero: false},
          data: this.timeData
        }
      ],
      yAxis: [
        {
          name: '湿度(%)',
          type: 'value',
          max: 80
        }
      ],
      series: [
        {
          name: '空气湿度',
          type: 'line',
          animation: false,
          areaStyle: {
            normal: {}
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          markArea: {
            silent: true,
            data: [[{
              xAxis: '7:00'
            }, {
              xAxis: '21:00'
            }]]
          },
          data: [40,40.1,40.8,40.2,50.4,50.3,50,50.8,60,60.5,70,70.5,72,80,75,69.5,64.3,55,56,54.3,51.4,49.4,45.3, 42.4,40]
        }
      ]
    });
  }

  shuifen() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      title: {
        text: '土壤水分变化',
        x: 'center',
        align: 'right',
        textStyle: {
          fontSize: 14,
        }
      },
      grid: {
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
        x: 'left',
        data: ['土壤水分']
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 40,
          end: 70
        },
        {
          type: 'inside',
          realtime: true,
          start: 40,
          end: 70
        }
      ],
      xAxis: [
        {
          // name:'时间',
          type: 'category',
          boundaryGap: false,
          axisLine: {onZero: false},
          data: this.timeData
        }
      ],
      yAxis: [
        {
          name: '水分(%)',
          type: 'value',
          max: 95
        }
      ],
      series: [
        {
          name: '土壤水分',
          type: 'line',
          animation: false,
          areaStyle: {
            normal: {}
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          markArea: {
            silent: true,
            data: [[{
              xAxis: '7:00'
            }, {
              xAxis: '21:00'
            }]]
          },
          data: [40,40.1,40.8,40.2,50.4,50.3,50,50.8,60,60.5,70,70.5,72,80,75,69.5,64.3,55,56,54.3,51.4,49.4,45.3, 42.4,40]
        }
      ]
    });
  }

  CO2() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    this.chart.setOption({
      title: {
        text: 'CO2浓度变化',
        x: 'center',
        align: 'right',
        textStyle: {
          fontSize: 14,
        }
      },
      grid: {
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
        x: 'left',
        data: ['CO2浓度']
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 40,
          end: 70
        },
        {
          type: 'inside',
          realtime: true,
          start: 40,
          end: 70
        }
      ],
      xAxis: [
        {
          // name:'时间',
          type: 'category',
          boundaryGap: false,
          axisLine: {onZero: false},
          data: this.timeData
        }
      ],
      yAxis: [
        {
          name: 'CO2(PPM)',
          type: 'value',
          max: 1200
        }
      ],
      series: [
        {
          name: 'CO2浓度',
          type: 'line',
          animation: false,
          areaStyle: {
            normal: {}
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          markArea: {
            silent: true,
            data: [[{
              xAxis: '7:00'
            }, {
              xAxis: '21:00'
            }]]
          },
          data: [300,400,440,600,700,800,900,1000,1111,1125,1200,952,923,910,900,800,810,727,845,836,789,452,568, 684,697],
        }
      ]
    });
  }
}
