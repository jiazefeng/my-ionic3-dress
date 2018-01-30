import { NavController } from 'ionic-angular';
import {Component, Input} from '@angular/core';


@Component({
  selector: 'ion-plants',
  templateUrl: 'ion-plants.html'
})
export class IonPlantsComponent {
  @Input() plants: Array<any> = [];

  constructor(public navCtrl: NavController) {
    // console.log('Hello IonPlantsComponent Component');
  }

}
