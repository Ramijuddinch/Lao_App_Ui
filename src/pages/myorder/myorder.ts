import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { LoaderService } from '../../providers/services/loader';
import { DataHandler } from '../../Datahandler/datahandler';

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {
  // wholesalerId: any;
  allOrder:any = [];
  mobileno: any;

  constructor(public navCtrl: NavController,public menu: MenuController, public navParams: NavParams, 
    public serviceHandler : ServicesProvider,public loader:LoaderService,public dataHandler :DataHandler) {
      //added local storage for getting mobile as mobile number was not passing in API - MYTHREYI
      this.dataHandler.storage.get("mobile").then(userData => {
        this.mobileno = userData;
        this.getAllOrder();
      })

  }

  ionViewDidLoad() {
  }
  onOpenMenu(){
    this.menu.open();
  }

  getAllOrder(){
    this.serviceHandler.Get_My_Order(this.mobileno).then(val =>{
      this.loader.show();
      this.allOrder = val['message'];
      console.log(this.allOrder)
      this.loader.hide();
    })
  }
  viewDetails(allproduct,orderID){
    this.navCtrl.push('OrderDetailsPage',{productDetails : allproduct })
  }
  
}
