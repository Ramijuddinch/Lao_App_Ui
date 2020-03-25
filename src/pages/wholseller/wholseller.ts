import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { DataHandler } from '../../Datahandler/datahandler';
import { LoaderService } from '../../providers/services/loader';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-wholseller',
  templateUrl: 'wholseller.html',
})
export class WholsellerPage {
  allWholesalers : any = [];
  constructor(public navCtrl: NavController, public serviceHandler : ServicesProvider, public storage : Storage,public events: Events,
    public navParams: NavParams,public loader:LoaderService,public dataHandler :DataHandler) {
      this.getAllWholesalers()
  }

  ionViewDidLoad() {
  }
  getAllWholesalers(){
    this.serviceHandler.Get_All_Wholesalers().then((response) => {
      this.allWholesalers = response['message'];
    })
  }

  selectedWholesaler(wholeseller){
    this.dataHandler.storage.set('selectWholesaler', wholeseller);
    this.navCtrl.push('TabPage');

  }
}
