import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Select, Events } from 'ionic-angular';
import { LoaderService } from '../../providers/services/loader';
import { ServicesProvider } from '../../providers/services/services';
import { DataHandler } from '../../Datahandler/datahandler';
import { Storage } from '@ionic/storage';
import { AlertService } from '../../providers/services/alert_service';
import * as _ from 'lodash';
import { ToastProvider } from '../../providers/services/toast';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  registrationModel: any = {};
  mobile: any;
  allLanguages: any = [];
  allWholesalers: any = [];
  selectWholesaler: any = [];
  @ViewChild('Language') LanguageSelect: Select;
  @ViewChild('Wholesaler') WholesalerSelect: Select;
  langCode: any;

  constructor(public navCtrl: NavController, public _alert: AlertService, public Toast: ToastProvider,
    public serviceHandler: ServicesProvider, public storage: Storage, public events: Events,
    public navParams: NavParams, public loader: LoaderService, public dataHandler: DataHandler) {

    this.dataHandler.storage.get("mobile").then(mobile => {
      this.mobile = mobile
    })
  }

  ionViewDidLoad() {
    this.getAllLanguange();
    this.getAllWholesalers();
  }

  registrationData() {
    //added password and confirm password - Mythreyi - as per  mail
    console.log(this.registrationModel)
    if (this.registrationModel.password != this.registrationModel.conpassword) {
      this.Toast.show('Passwords does not match')
      return false
    } else {
      const data = {
        "name": this.registrationModel.retailerName,
        "password": this.registrationModel.password,
        "mobile": this.mobile,
        "outletName": this.registrationModel.outletName,
        "shopAddress": this.registrationModel.shopAddress,
        "city":this.registrationModel.city,
        "state":this.registrationModel.state,
        "zipcode": this.registrationModel.zipcode,
        "email":this.registrationModel.email,
        "gstNumber":this.registrationModel.gstNumber,
        "panNumber":this.registrationModel.panNumber,
        "wholesaler": this.registrationModel.wholesaler,
        "languange": this.registrationModel.languange,
        "termsAndConditions": this.registrationModel.termsAndConditions
      }

      this.serviceHandler.Add_Retailers(data).then((response) => {
        this.loader.show();
        if (response['code'] == 200) {
          // this.dataHandler.storage.set('mobile', this.mobile);
          // this.events.publish('mobile', this.mobile);
          this.Toast.show('Record insert successfully')
          this.navCtrl.setRoot('TabPage')
          this.loader.hide();
          // this.dataHandler.storage.set('userData', data);
          // this.events.publish('userData', data);
        } else {
          this.Toast.show(response['message'])
          this.loader.hide();
        }
      })
    }
  }

  getAllLanguange() {
    this.serviceHandler.Get_All_Languanges().then((response) => {
      this.allLanguages = response['message'];
    })
  }
  switchlang(langcode) {
    this.langCode = _.find(this.allLanguages, { '_id': langcode })
    this.dataHandler.storage.set('selectedLanguages', this.langCode);
  }

  getAllWholesalers() {
    this.serviceHandler.Get_All_Wholesalers().then((response) => {
      this.allWholesalers = response['message'];
    })
  }

  switchWholesaler(Wholesaler) {
    this.selectWholesaler = _.filter(this.allWholesalers, { '_id': Wholesaler });
    this.dataHandler.storage.set('selectWholesaler', this.selectWholesaler[0]);
  }
}
