webpackJsonp([4],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsPageModule", function() { return UserdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userdetails__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserdetailsPageModule = /** @class */ (function () {
    function UserdetailsPageModule() {
    }
    UserdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__userdetails__["a" /* UserdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__userdetails__["a" /* UserdetailsPage */]),
            ],
        })
    ], UserdetailsPageModule);
    return UserdetailsPageModule;
}());

//# sourceMappingURL=userdetails.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_alert_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Datahandler_datahandler__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';







/**
 * Generated class for the UserdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdetailsPage = /** @class */ (function () {
    function UserdetailsPage(navCtrl, _alert, Toast, serviceHandler, storage, events, navParams, loader, dataHandler) {
        //  this.registrationModel._id=displayDatas.message[0]._id;
        var _this = this;
        this.navCtrl = navCtrl;
        this._alert = _alert;
        this.Toast = Toast;
        this.serviceHandler = serviceHandler;
        this.storage = storage;
        this.events = events;
        this.navParams = navParams;
        this.loader = loader;
        this.dataHandler = dataHandler;
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
        this.registrationModel = {};
        this.allLanguages = [];
        this.allWholesalers = [];
        this.selectWholesaler = [];
        this.storage.get("displayDatas").then(function (displayDatas) {
            console.log(displayDatas, "ddatas");
            _this.registrationModel._id = displayDatas.message[0]._id;
            _this.registrationModel.retailerName = displayDatas.message[0].name;
            //  this.registrationModel.name=displayDatas.message[0].name;
            _this.registrationModel.mobile = displayDatas.message[0].mobile;
            _this.registrationModel.outletName = displayDatas.message[0].outletName;
            _this.registrationModel.shopAddress = displayDatas.message[0].shopAddress;
            _this.registrationModel.city = displayDatas.message[0].city;
            _this.registrationModel.state = displayDatas.message[0].state;
            _this.registrationModel.zipcode = displayDatas.message[0].zipcode;
            _this.registrationModel.email = displayDatas.message[0].email;
            _this.registrationModel.gstNumber = displayDatas.message[0].gstNumber;
            _this.registrationModel.panNumber = displayDatas.message[0].panNumber;
        });
    }
    UserdetailsPage.prototype.isReadonly = function () { return true; };
    UserdetailsPage.prototype.editUserDetails = function () {
        var _this = this;
        console.log(this.registrationModel, "updatedetails");
        this.serviceHandler.EDIT_Retailers(this.registrationModel).then(function (response) {
            _this.loader.show();
            if (response['code'] == 200) {
                _this.Toast.show('Record update successfully');
                _this.navCtrl.setRoot('TabPage');
                _this.loader.hide();
                _this.dataHandler.storage.set('displayDatas', _this.registrationModel);
                _this.events.publish('displayDatas', _this.registrationModel);
            }
            else {
                _this.Toast.show(response['message']);
                _this.loader.hide();
            }
        });
    };
    UserdetailsPage.prototype.cancelEdit = function () {
        this.navCtrl.setRoot('TabPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('Language'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Select */])
    ], UserdetailsPage.prototype, "LanguageSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('Wholesaler'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Select */])
    ], UserdetailsPage.prototype, "WholesalerSelect", void 0);
    UserdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-userdetails',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/userdetails/userdetails.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>View Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #registration="ngForm">\n    <ion-list class="loginForm">\n      <ion-item>\n        <ion-label floating color=\'dark\'>Name</ion-label>\n        <ion-input [readonly]="isReadonly" type="text" [(ngModel)]="registrationModel.retailerName" #retailername="ngModel" name="retailername"\n          required></ion-input>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label floating color=\'dark\'>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="registrationModel.password" #Password="ngModel" name="Password" required>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating color=\'dark\'> Confirm password</ion-label>\n        <ion-input type="password" name="Conpassword" #Conpassword="ngModel" [(ngModel)]="registrationModel.conpassword"\n          required></ion-input>\n      </ion-item> -->\n\n \n      <ion-item>\n        <ion-label floating color=\'dark\'>Contact Number</ion-label>\n        <ion-input type="tel" pattern="[5-9]{1}[0-9]{9}" minlength="10" maxlength="10"\n          oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" required [(ngModel)]="registrationModel.mobile"\n          #ContactNumber="ngModel" name="ContactNumber"></ion-input>\n      </ion-item>\n\n    <ion-item>\n      <ion-label floating color=\'dark\'>Outlet Name</ion-label>\n      <ion-input type="text" [(ngModel)]="registrationModel.outletName" #OutletName="ngModel" name="OutletName"\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color=\'dark\'>Shop Address</ion-label>\n      <ion-input type="text" [(ngModel)]="registrationModel.shopAddress" #ShopAddress="ngModel" name="ShopAddress"\n        required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating color=\'dark\'>City</ion-label>\n      <ion-input text-capitalize type="text" [(ngModel)]="registrationModel.city" #City="ngModel" name="City"\n        required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating color=\'dark\'>State</ion-label>\n      <ion-input text-capitalize type="text" [(ngModel)]="registrationModel.state" #State="ngModel" name="State"\n        required></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label floating color=\'dark\'>Contact Number</ion-label>\n      <ion-input type="tel" pattern="[5-9]{1}[0-9]{9}" minlength="10" maxlength="10"\n        oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" required [(ngModel)]="mobile"\n        #ContactNumber="ngModel" name="ContactNumber"></ion-input>\n    </ion-item> -->\n    <!-- [(ngModel)]="registrationModel.mobile"  minlength="10" type="tel"   name="ContactNumber" maxlength="10"  #ContactNumber="ngModel"  pattern="[5-9]{1}[0-9]{9}"  oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" required -->\n    <!-- <div class="warning" *ngIf="ContactNumber.errors?.required && ContactNumber.touched">*{{\'Contact Number is required\'}}</div>\n                <div class="warning" *ngIf="ContactNumber.errors?.minlength">*{{\'Contact Number  should be 10 digits long\'}}</div>\n                <div class="warning" *ngIf="ContactNumber.errors?.pattern">*{{\'Please enter valid contact number\'}}</div> -->\n\n    <ion-item>\n      <ion-label floating color=\'dark\'>Pin code</ion-label>\n      <ion-input type="tel" [(ngModel)]="registrationModel.zipcode" #Zipcode="ngModel" name="Zipcode" minlength="6"\n        maxlength="6" oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating color=\'dark\'>E-mail</ion-label>\n      <ion-input type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" [(ngModel)]="registrationModel.email" #Email="ngModel" name="Email"\n        required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating color=\'dark\'>GST Number</ion-label>\n      <ion-input [readonly]="isReadonly" type="number" [(ngModel)]="registrationModel.gstNumber" #GstNumber="ngModel" name="GstNumber"\n        ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating color=\'dark\'>PAN Number</ion-label>\n      <ion-input [readonly]="isReadonly" type="text" [(ngModel)]="registrationModel.panNumber" #PanNumber="ngModel" name="PanNumber"\n        ></ion-input>\n    </ion-item>\n\n    <!-- <ion-list style="margin-top: 8%">\n      <ion-item>\n        <ion-label>Wholesaler</ion-label>\n        <ion-select #Wholesaler (ionChange)="switchWholesaler(registrationModel.wholesaler)"\n          (click)="$event.stopPropagation();_alert.setElement(WholesalerSelect,true)"\n          [(ngModel)]="registrationModel.wholesaler" #Wholesaler="ngModel" name="Wholesaler" cancelText="Cancel"\n          okText="Ok" required>\n          <ion-option value="{{wholesalers._id}}" *ngFor="let wholesalers of allWholesalers">{{wholesalers.name}}\n          </ion-option>\n\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-list style="margin-top: 8%">\n      <ion-item>\n        <ion-label> Select language</ion-label>\n        <ion-select #Language (ionChange)=\'switchlang(registrationModel.languange)\'\n          (click)="$event.stopPropagation();_alert.setElement(LanguageSelect,true)"\n          [(ngModel)]="registrationModel.languange" #Selectlanguage="ngModel" name="Selectlanguage" cancelText="Cancel"\n          okText="Ok">\n          <ion-option value="{{lang._id}}" *ngFor="let lang of allLanguages">{{lang.name}}</ion-option>\n\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n\n      <ion-label class="keepMe">Terms & conditions\n      </ion-label>\n      <ion-checkbox class="checkBox" [(ngModel)]="registrationModel.termsAndConditions" name="terms" #terms="ngModel"\n        required>\n      </ion-checkbox>\n    </ion-item> -->\n\n    <button ion-button full text-uppercase class="footer-button" [disabled]="registration.invalid"\n    (click)=\'editUserDetails()\'>UPDATE DETAILS</button>\n    <button ion-button full text-uppercase class="footer-button"\n    (click)=\'cancelEdit()\'>CANCEL</button>\n\n    </ion-list>\n  </form>\n</ion-content>\n<!-- <ion-footer no-border>\n  <button ion-button full text-uppercase class="footer-button" [disabled]="registration.invalid"\n    (click)=\'registrationData()\'>UPDATE DETAILS</button>\n    <button ion-button full text-uppercase class="footer-button" [disabled]="registration.invalid"\n    (click)=\'cancelEdit()\'>CANCEL</button>\n</ion-footer> -->'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/userdetails/userdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_5__providers_services_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_7__Datahandler_datahandler__["a" /* DataHandler */]])
    ], UserdetailsPage);
    return UserdetailsPage;
}());

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
//# sourceMappingURL=userdetails.js.map

/***/ })

});
//# sourceMappingURL=4.js.map