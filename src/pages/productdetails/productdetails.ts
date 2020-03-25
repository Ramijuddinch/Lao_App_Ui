import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ToastProvider } from '../../providers/services/toast';
import { LoaderService } from '../../providers/services/loader';
import { DataHandler } from '../../Datahandler/datahandler';
import { ServicesProvider } from '../../providers/services/services';
import { GlobalProvider } from '../../providers/services/global';

@IonicPage()
@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class ProductdetailsPage {
  product: any;
  title: any;
  mobile: any;
  viewcartlength: any;
  cartCount: any;

  constructor(public navCtrl: NavController,  public Toast :ToastProvider, public dataHandler : DataHandler,
    public serviceHandler : ServicesProvider,public events: Events,public global: GlobalProvider,
    public toast:ToastProvider,public loader:LoaderService,public navParams: NavParams) {
      this.product  = this.navParams.get("product");
      this.title = this.product.name
      this.dataHandler.storage.get("mobile").then(mobile => {
        this.mobile = mobile
        this.viewCart();
      })
  }

  ionViewDidLoad() {
  }
  addtocart(product,qty){
    if(qty != undefined){
      let data = {
        userId:product.sku,
        sku:product.sku,
        mobile: this.mobile,
        name:product.name,
        qty:qty,
        price:product.price,
        image:product.image,
        wholesaler: product.wholesaler
    }
    this.serviceHandler.Add_To_Cart(data).then(val =>{
      this.loader.show();
      this.toast.show("Product added into cart successfully ");
      this.viewCart();
      this.loader.hide();
  });
  }else{
    this.loader.hide();
    this.toast.show("Please select quantity ");
  }
}

  viewCart(){
    this.serviceHandler.View_Cart(this.mobile).then(value =>{
      if(value['code'] == 200){
        this.viewcartlength = value['message'].length;
          this.cartCount = this.viewcartlength;
          this.events.publish("productCount:addCount", this.cartCount, true);  
        }else{
        this.cartCount = 0;
        this.events.publish("productCount:addCount", this.cartCount, true);
      }
    })
  }
}
