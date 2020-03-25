import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage } from './tab';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TabPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPage),
  HttpClientModule 
  ],
  
  entryComponents:[
    TabPage
  ]
})
export class TabPageModule {}
