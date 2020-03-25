import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Select, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataHandler } from '../../Datahandler/datahandler';
import { ServicesProvider } from '../../providers/services/services';
import { ToastProvider } from '../../providers/services/toast';
import { LoaderService } from '../../providers/services/loader';
import { GlobalProvider } from '../../providers/services/global';

import { File } from '@ionic-native/file/ngx';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
@IonicPage()
@Component({
  selector: 'page-ordersummery',
  templateUrl: 'ordersummery.html',
})
export class OrdersummeryPage {
  
  
  codModel: any = {};
  orderId: any;
  
  
  @ViewChild('Language') LanguageSelect: Select;
  @ViewChild('Wholesaler') WholesalerSelect: Select;
  langCode: any;
  wholesalerId: any;


  mobile: any;
  total: any;
  cartCount: any;
   viewcart: any=[];
  viewdetails: any;
 
  description:any;
  quantity: any;
  price: any;
  totalPrice: any;

  WholesalerAddress:any[];
  ViewWholesalerAddress: any;
  phone: any;
  wholesalerName: any;
  wholesaleraddress1: any;
  wholesaleraddress2: any;
  retailerName: any;
  deliveryAddress: any;
  city: any;
  state: any;
  zipcode: any;
  orderdate: any;
  wholesalerGstnumber: any;
  cod: any;
  
  
  //  billingdatas:Element=document.getElementById('wrapper')

  // details:any;
  
  constructor(public navCtrl: NavController,public loader: LoaderService,public Toast: ToastProvider,public serviceHandler: ServicesProvider,public storage: Storage,
    public events: Events,public dataHandler :DataHandler, public navParams: NavParams ,public global: GlobalProvider,public file: File) {
   
      this.dataHandler.storage.get("mobile").then(mobile => {
        this.mobile = mobile;
        this.cod=this.codModel.cod;
        //  this.viewCart();
        
      })

   this.viewdetails=global.viewcart;
   this.total=global.total;
   this.cartCount=global.cartCount;
   this.ViewWholesalerAddress=global.WholesalerAddress;

  //  this.description=this.viewdetails.name;
  //  this.quantity=this.viewdetails.qty;
  //   this.price=this.viewdetails.price;
  //  this.totalPrice=this.viewdetails.totalPrice;
   this.orderdate=this.viewdetails[0].CreatedOn;

   this.phone=this.ViewWholesalerAddress.mobile;
   this.wholesalerName=this.ViewWholesalerAddress.name;
   this.wholesaleraddress1=this.ViewWholesalerAddress.address1;
   this.wholesaleraddress2=this.ViewWholesalerAddress.address2;
   this.wholesalerGstnumber=this.ViewWholesalerAddress.gstno;

    this.storage.get("displayDatas").then(displayDatas => {
      // console.log(displayDatas,"ddatas111111111111")
    
     this.retailerName=displayDatas.message[0].name;
     this.deliveryAddress=displayDatas.message[0].shopAddress;
     this.city=displayDatas.message[0].city;
     this.state=displayDatas.message[0].state;
     this.zipcode=displayDatas.message[0].zipcode;
  
   })


//  this.storage.get("selectWholesaler").then(selectWholesaler=>{
//   //  console.log(selectWholesaler,"selectwholesalerdatas")
//    this.phone=selectWholesaler.mobile;
//    this.wholesalerId=selectWholesaler._id;
//  })
// }
}
  ionViewDidLoad() {
    console.log('ionViethis.viewcart=global.viewcart;wDidLoad OrdersummeryPage');
  }


  confirmOrdered(){

    console.log(this.viewdetails,"6666666666666666")
    console.log(this.cartCount,"44444444444")
    console.log( this.total,"1111111111111111111")
    console.log(this.ViewWholesalerAddress,"55555555555555")
  

    let data = {
      userId:this.mobile,
      mobile:this.mobile,
      grandTotal:this.total,
      order: this.global.viewcart,
      
    }
// console.log(this.total,"22222222222222222222222222")
    this.serviceHandler.Place_Order(data).then(val =>{


      if(val['code']== 200){
          this.orderId = val['orderId'];
            // this.WholesalerAddress=val['WholesalerAddress']
            this.viewdetails=val['order']
            // this.ViewWholesalerAddress=val['WholesalerAddress']
         this.navCtrl.push('ThankyouPage',{orderID : this.orderId })
          
          //  this.navCtrl.push('ThankyouPage')
      }else{

      }
    })
    
  }


makePdf() {
  pdfmake.vfs = pdfFonts.pdfMake.vfs;
  var docDefinition = {
  content: [
  {
  columns: [
  // {
  // image: 'data:image/jpeg;base64,your_image_here',
  // fit: [100, 100]
  // },
  [
  { text: 'BILLING DETAILS', style: 'header' },
    
  //  { text: this.details.value, style: 'sub_header' },
  //  { text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
  ]
  ]
  }
  ],
  styles: {
  header: {
  bold: true,
  fontSize: 20,
  alignment: 'right'
  },
  sub_header: {
  fontSize: 18,
  alignment: 'right'
  },
  url: {
  fontSize: 16,
  alignment: 'right'
  }
  },
  pageSize: 'A4',
  pageOrientation: 'portrait'
  };
  pdfmake.createPdf(docDefinition).open();
  }
  
}