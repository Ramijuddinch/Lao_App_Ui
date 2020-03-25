import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {ToastProvider} from '../../providers/services/toast';
import { LoaderService } from '../../providers/services/loader';
import { ServicesProvider } from '../../providers/services/services';
import { AlertService } from '../../providers/services/alert_service';
import { DataHandler } from '../../Datahandler/datahandler';
import { GlobalProvider } from '../../providers/services/global';
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  cat: any;
  mobile: any;
  lang: any;
  pageNumberPerScroll: any;
  lst_Productsnew: any;
  lst_Product: any = [];
  pageNumber: any = 0;
  title: any;
  viewcartlength: any;
  cartCount: any;
  isLoaded: boolean = false;
  retailermobileno: any;
  constructor(public navCtrl: NavController,public toast:ToastProvider,
    public loader:LoaderService,public _alert: AlertService, public Toast :ToastProvider, public dataHandler : DataHandler,
    public serviceHandler : ServicesProvider,public events: Events,public global: GlobalProvider,
     public navParams: NavParams) {
      this.pageNumberPerScroll = 0;
      this.cat  = this.navParams.get("cat");
      this.mobile = this.navParams.get("mobile");
      this.title = this.cat.name;
  //     this.dataHandler.storage.get("selectWholesaler").then(selectWholesaler => {
  //     this.mobile = selectWholesaler.mobile;
      
    
  // }) 
  this.dataHandler.storage.get("selectedLanguages").then(selectedLanguages => {
    this.lang = selectedLanguages.code;
    this.viewCart();
    this.products();
  this.dataHandler.storage.get("mobile").then(mobile => {
   this.retailermobileno = mobile;

  })
})

}

  viewDetails(product){
    this.navCtrl.push('ProductdetailsPage',{product : product});
  }
  addtocart(product,qty){
    //added null while checking - Mythreyi - bug fixed - 4025
    if (qty != undefined && qty != null && qty != "") {
      let data = {
        userId:product.sku,
        sku:product.sku,
        mobile: this.retailermobileno,
        name:product.name,
        qty:qty,
        price:product.price,
        image:product.image,
        wholesaler: product.wholesaler
    }
      this.serviceHandler.Add_To_Cart(data).then(val =>{
        this.loader.show();
        this.toast.show("Product added into cart successfully");
        this.viewCart();
        this.loader.hide();
    });
    }else{
      this.loader.hide();
      this.toast.show("Please select quantity");
    }
  }
  products(){
    this.serviceHandler.Get_All_Products(this.cat._id,this.pageNumber,this.lang,this.mobile).then(product => {
      if(product['code'] == 200){
        this.lst_Product = product['message'];
        this.isLoaded = true;
      }else{
        // this.isLoaded == false;
      }
    });
  }

  doInfinite(infiniteScroll) {
    this.pageNumberPerScroll = this.pageNumberPerScroll + 1;
      this.serviceHandler.Get_All_Products(this.cat._id,this.pageNumberPerScroll ,this.lang,this.mobile).then(productData => {
        if(productData['code'] != 402){
          this.lst_Productsnew = productData['message'];
          this.lst_Product = this.lst_Product.concat(this.lst_Productsnew);
          infiniteScroll.complete();
          this.isLoaded = true;
        }else{
          // this.isLoaded == false;
        }
      },
        err => {
        });
}

viewCart(){
  this.serviceHandler.View_Cart(this.retailermobileno).then(value =>{
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
