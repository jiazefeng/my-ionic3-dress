import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailsPage } from './contact-details';

@NgModule({
  declarations: [
    ContactDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailsPage),ComponentsModule
  ],
})
export class ContactDetailsPageModule {}
