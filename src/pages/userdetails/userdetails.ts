import { Component, ViewChild } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage,Nav,NavParams, Platform, NavController, App, ViewController, Events, Select } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServicesProvider } from '../../providers/services/services';
import { AlertService } from '../../providers/services/alert_service';
import { ToastProvider } from '../../providers/services/toast';
import { LoaderService } from '../../providers/services/loader';
import { DataHandler } from '../../Datahandler/datahandler';


/**
 * Generated class for the UserdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdetails',
  templateUrl: 'userdetails.html',
})
export class UserdetailsPage {

  isReadonly() {return true;}
//   name: any;
//   mobile: any;
//   password: any;
//   shopAddress: any;
//   outletName: any;
//   city: any;
//   state: any;
//   zipcode: any;
//   email: any;
//   gstNumber: any;
//   panNumber: any;
//   languange: any;
//   wholesaler: any;
  

//   constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,public storage: Storage) {


//     this.storage.get("displayDatas").then(displayDatas => {

//          console.log(displayDatas,"ddatas")

//          this.name=displayDatas.message[0].name;
//          this.password=displayDatas.message[0].password;
//          this.mobile=displayDatas.message[0].mobile;
//          this.outletName=displayDatas.message[0].outletName;
//          this.shopAddress=displayDatas.message[0].shopAddress;
//          this.city=displayDatas.message[0].city;
//          this.state=displayDatas.message[0].state;
//          this.zipcode=displayDatas.message[0].zipcode;
//          this.email=displayDatas.message[0].email;
//          this.gstNumber=displayDatas.message[0].gstNumber;
//          this.panNumber=displayDatas.message[0].panNumber;
//          this.wholesaler=displayDatas.message[0].wholesaler;
//          this.languange=displayDatas.message[0].languange;

//     })

//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad UserdetailsPage');
//   }

// }
registrationModel: any = {};
  _id:any;
  mobile: any;
  allLanguages: any = [];
  allWholesalers: any = [];
  selectWholesaler: any = [];
  @ViewChild('Language') LanguageSelect: Select;
  @ViewChild('Wholesaler') WholesalerSelect: Select;
  langCode: any;
    name: any;
  // retailerName:any;
  // retailerName:any;
  outletName: any;
  shopAddress: any;
  city: any;
  panNumber: any;
  gstNumber: any;
  email: any;
  zipcode: any;
  state: any;

  constructor(public navCtrl: NavController, public _alert: AlertService, public Toast: ToastProvider,
    public serviceHandler: ServicesProvider, public storage: Storage, public events: Events,
    public navParams: NavParams, public loader: LoaderService, public dataHandler: DataHandler) {

  //  this.registrationModel._id=displayDatas.message[0]._id;

    this.storage.get("displayDatas").then(displayDatas => {

         console.log(displayDatas,"ddatas")

         this.registrationModel._id=displayDatas.message[0]._id;
          this.registrationModel.retailerName=displayDatas.message[0].name;
        //  this.registrationModel.name=displayDatas.message[0].name;
         this.registrationModel.mobile=displayDatas.message[0].mobile;
         this.registrationModel.outletName=displayDatas.message[0].outletName;
         this.registrationModel.shopAddress=displayDatas.message[0].shopAddress;
         this.registrationModel.city=displayDatas.message[0].city;
         this.registrationModel.state=displayDatas.message[0].state;
         this.registrationModel.zipcode=displayDatas.message[0].zipcode;
         this.registrationModel.email=displayDatas.message[0].email;
         this.registrationModel.gstNumber=displayDatas.message[0].gstNumber;
         this.registrationModel.panNumber=displayDatas.message[0].panNumber;
     

    })

  }

  editUserDetails(){
    console.log(this.registrationModel,"updatedetails")

  
    this.serviceHandler.EDIT_Retailers(this.registrationModel).then((response) => {
            this.loader.show();
            if (response['code'] == 200) {
              
              this.Toast.show('Record update successfully')
              this.navCtrl.setRoot('TabPage')
              this.loader.hide();
              this.dataHandler.storage.set('displayDatas', this.registrationModel);
              this.events.publish('displayDatas', this.registrationModel);
            } else {
              this.Toast.show(response['message'])
              this.loader.hide();
            }
          })
        }



        cancelEdit(){
          this.navCtrl.setRoot('TabPage')
        }
      
    }
  // ionViewDidLoad() {
  //   this.getAllLanguange();
  //   this.getAllWholesalers();
  // }

  // registrationData() {
  //   //added password and confirm password - Mythreyi - as per  mail
  //   console.log(this.registrationModel)
  //   if (this.registrationModel.password != this.registrationModel.conpassword) {
  //     this.Toast.show('Passwords does not match')
  //     return false
  //   } else {
  //     const data = {
  //       "name": this.registrationModel.retailerName,
  //       "password": this.registrationModel.password,
  //       "mobile": this.mobile,
  //       "outletName": this.registrationModel.outletName,
  //       "shopAddress": this.registrationModel.shopAddress,
  //       "city":this.registrationModel.city,
  //       "state":this.registrationModel.state,
  //       "zipcode": this.registrationModel.zipcode,
  //       "email":this.registrationModel.email,
  //       "gstNumber":this.registrationModel.gstNumber,
  //       "panNumber":this.registrationModel.panNumber,
  //       "wholesaler": this.registrationModel.wholesaler,
  //       "languange": this.registrationModel.languange,
  //       "termsAndConditions": this.registrationModel.termsAndConditions
  //     }

  //     this.serviceHandler.Add_Retailers(data).then((response) => {
  //       this.loader.show();
  //       if (response['code'] == 200) {
  //         this.dataHandler.storage.set('mobile', this.mobile);
  //         this.events.publish('mobile', this.mobile);
  //         this.Toast.show('Record insert successfully')
  //         this.navCtrl.setRoot('TabPage')
  //         this.loader.hide();
  //         this.dataHandler.storage.set('userData', data);
  //         this.events.publish('userData', data);
  //       } else {
  //         this.Toast.show(response['message'])
  //         this.loader.hide();
  //       }
  //     })
  //   }
  // }

  // getAllLanguange() {
  //   this.serviceHandler.Get_All_Languanges().then((response) => {
  //     this.allLanguages = response['message'];
  //   })
  // }
  // switchlang(langcode) {
  //   this.langCode = _.find(this.allLanguages, { '_id': langcode })
  //   this.dataHandler.storage.set('selectedLanguages', this.langCode);
  // }

  // getAllWholesalers() {
  //   this.serviceHandler.Get_All_Wholesalers().then((response) => {
  //     this.allWholesalers = response['message'];
  //   })
  // }

  // switchWholesaler(Wholesaler) {
  //   this.selectWholesaler = _.filter(this.allWholesalers, { '_id': Wholesaler });
  //   this.dataHandler.storage.set('selectWholesaler', this.selectWholesaler[0]);
  // }
