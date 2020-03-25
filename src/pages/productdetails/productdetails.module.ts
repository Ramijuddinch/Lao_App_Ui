import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductdetailsPage } from './productdetails';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProductdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductdetailsPage),
    ComponentsModule
  ],
})
export class ProductdetailsPageModule {}
