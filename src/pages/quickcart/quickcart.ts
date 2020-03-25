import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ViewController, Events } from 'ionic-angular';
import { ToastProvider } from '../../providers/services/toast';
import { ServicesProvider } from '../../providers/services/services';
import { DataHandler } from '../../Datahandler/datahandler';
import { LoaderService } from '../../providers/services/loader';

@IonicPage()
@Component({
  selector: 'page-quickcart',
  templateUrl: 'quickcart.html',
})
export class QuickcartPage {
  @ViewChild('searchInput') sInput;
  searchItem: string = "";
  searchList: any = [];
  searchListNew: any = [];
  pageNumber: number = 1;
  pageNumberPerScroll: number = 0;
  langCode: any;
  mobile: any;
  isLoaded: boolean = false;
  retailermobileno: any;
  viewcartlength: any;
  cartCount: any;
  productLength: any;
  constructor(public navCtrl: NavController, public events: Events, public loader: LoaderService, public viewCtrl: ViewController, public dataHandler: DataHandler, public serviceHandler: ServicesProvider, public menu: MenuController, public toast: ToastProvider, public navParams: NavParams) {
    this.events.subscribe('productCount:addCount', (productLength, addCount) => {
      if (addCount == true) {
        this.productLength = productLength;
      }
    });
    this.dataHandler.storage.get("selectedLanguages").then(lang => {
      this.langCode = lang.code;
      this.dataHandler.storage.get("selectWholesaler").then(saler => {
        this.mobile = saler.mobile;
        this.quickAllProducts();
      });
    });
    this.dataHandler.storage.get("mobile").then(mobile => {
      this.retailermobileno = mobile;
      this.viewCart();
    })
  }

  quickAllProducts() {
    this.serviceHandler.Guick_All_products(this.pageNumberPerScroll, this.langCode, this.mobile).then(searchFilterData => {
      this.loader.show();
      this.searchList = searchFilterData['message'];
      this.loader.hide();
      this.isLoaded = true;
    });
  }

  doInfinite(infiniteScroll) {
    this.pageNumberPerScroll = this.pageNumberPerScroll + 1;
    this.serviceHandler.Guick_All_products(this.pageNumberPerScroll, this.langCode, this.mobile).then(productData => {
      if (productData['code'] != 402) {
        this.searchListNew = productData['message'];
        this.searchList = this.searchList.concat(this.searchListNew);
        infiniteScroll.complete();
        this.isLoaded = true;
      } else {
      }
    },
      err => {
      });
  }


  onOpenMenu() {
    this.menu.open();
  }

  viewDetails(product) {
    this.navCtrl.push('ProductdetailsPage', { product: product });
  }
  addtocart(product, qty) {
    //added null while checking - Mythreyi - bug fixed - 4025
    if (qty != undefined && qty != null && qty != "") {
      let data = {
        userId: product.sku,
        sku: product.sku,
        mobile: this.retailermobileno,
        name: product.name,
        qty: qty,
        price: product.price,
        image: product.image,
        wholesaler: product.wholesaler
      }
      this.serviceHandler.Add_To_Cart(data).then(val => {
        this.loader.show();
        this.toast.show("Product added into cart successfully");
        this.viewCart();
        this.loader.hide();
      });
    } else {
      this.loader.hide();
      this.toast.show("Please select quantity");
    }
  }
  cart() {
    this.navCtrl.push('MycartPage');
  }


  viewCart() {
    this.serviceHandler.View_Cart(this.retailermobileno).then(value => {
      if (value['code'] == 200) {
        this.viewcartlength = value['message'].length;
        this.cartCount = this.viewcartlength;
        this.events.publish("productCount:addCount", this.cartCount, true);
      } else {
        this.cartCount = 0;
        this.events.publish("productCount:addCount", this.cartCount, true);
      }
    })
  }

  setFilteredCategory(event) {
    this.pageNumberPerScroll = 0;
    if (this.searchItem.length > 2) {
      this.serviceHandler.Quick_Cart(this.searchItem, this.pageNumberPerScroll, this.langCode, this.mobile).then(searchFilterData => {
        this.searchList = searchFilterData['message'];
      });
    } else {
      this.quickAllProducts();
    }
  }
}
