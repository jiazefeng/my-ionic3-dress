import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductionAddPage } from './production-add';

@NgModule({
  declarations: [
    ProductionAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductionAddPage),
  ],
})
export class ProductionAddPageModule {}
