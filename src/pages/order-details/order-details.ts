import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  AllProducts:any =[];
  title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AllProducts  = this.navParams.get("productDetails");
    console.log( this.AllProducts)
    this.title  = this.AllProducts.laoOrderId;
  }

}
