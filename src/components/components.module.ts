import {IonicModule} from 'ionic-angular';
import {NgModule} from '@angular/core';
import {IonProductsComponent} from './ion-products/ion-products';
import {IonPlantsComponent} from './ion-plants/ion-plants';

@NgModule({
  declarations: [IonProductsComponent,
    IonPlantsComponent],
  imports: [
    IonicModule
  ],
  exports: [IonProductsComponent,
    IonPlantsComponent]
})
export class ComponentsModule {
}
