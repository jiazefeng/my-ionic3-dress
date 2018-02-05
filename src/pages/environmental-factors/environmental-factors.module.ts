import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvironmentalFactorsPage } from './environmental-factors';

@NgModule({
  declarations: [
    EnvironmentalFactorsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvironmentalFactorsPage),
  ],
})
export class EnvironmentalFactorsPageModule {}
