import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WholsellerPage } from './wholseller';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WholsellerPage,
  ],
  imports: [
    IonicPageModule.forChild(WholsellerPage),
    ComponentsModule
  ],
})
export class WholsellerPageModule {}
