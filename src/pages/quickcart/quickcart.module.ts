import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickcartPage } from './quickcart';

@NgModule({
  declarations: [
    QuickcartPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickcartPage),
  ],
})
export class QuickcartPageModule {}
