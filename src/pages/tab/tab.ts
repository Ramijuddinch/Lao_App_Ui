import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs } from 'ionic-angular';
@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  @ViewChild('myTabs') tabRef: Tabs;
  homeRoot = 'HomePage';
  MyofferRoot = 'OfferPage';
  sellerRoot = 'WholsellerPage';

  tabindex: number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    ) {
    }
}
