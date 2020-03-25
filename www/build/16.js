webpackJsonp([16],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyorderPageModule", function() { return MyorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myorder__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyorderPageModule = /** @class */ (function () {
    function MyorderPageModule() {
    }
    MyorderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myorder__["a" /* MyorderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myorder__["a" /* MyorderPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], MyorderPageModule);
    return MyorderPageModule;
}());

//# sourceMappingURL=myorder.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyorderPage = /** @class */ (function () {
    function MyorderPage(navCtrl, menu, navParams, serviceHandler, loader, dataHandler) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.serviceHandler = serviceHandler;
        this.loader = loader;
        this.dataHandler = dataHandler;
        // wholesalerId: any;
        this.allOrder = [];
        //added local storage for getting mobile as mobile number was not passing in API - MYTHREYI
        this.dataHandler.storage.get("mobile").then(function (userData) {
            _this.mobileno = userData;
            _this.getAllOrder();
        });
    }
    MyorderPage.prototype.ionViewDidLoad = function () {
    };
    MyorderPage.prototype.onOpenMenu = function () {
        this.menu.open();
    };
    MyorderPage.prototype.getAllOrder = function () {
        var _this = this;
        this.serviceHandler.Get_My_Order(this.mobileno).then(function (val) {
            _this.loader.show();
            _this.allOrder = val['message'];
            console.log(_this.allOrder);
            _this.loader.hide();
        });
    };
    MyorderPage.prototype.viewDetails = function (allproduct, orderID) {
        this.navCtrl.push('OrderDetailsPage', { productDetails: allproduct });
    };
    MyorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myorder',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/myorder/myorder.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left icon-only class="bgimgmenuwidth">\n\n          <button icon-only menuToggle class="bgimgmenuwidth" (click)="onOpenMenu()">\n\n              <img class="bgimgmenu" src="assets/icon/menu.svg" alt="">\n\n          </button>\n\n        \n\n      </ion-buttons>\n\n    <ion-title>My Order</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list  >\n\n    <ion-item *ngFor="let allOrders of allOrder">\n\n      <ion-grid >\n\n        <ion-row>\n\n          <ion-col>\n\n              <p class="orderid">Order id #{{allOrders.laoOrderId}} </p>\n\n              <!-- <p class="name1">Order Status : {{allOrders.status.message}}</p> -->\n\n              <p class="name1">Outlet name : {{allOrders.outletName}}</p>\n\n              <p class="name2">Address : {{allOrders.shopAddress}}</p>\n\n              <p class="name2">Mobile : {{allOrders.retailerMobile}}</p>\n\n              <p class="name2">Pincode :{{allOrders.zipcode}}</p>\n\n              <p class="">Total Items: {{allOrders.products.length}}</p><br>\n\n              <p class="" >Order Value: \n\n                <span class="red"> ₹ {{allOrders.orderValue  | number:\'1.2-5\' }}</span> </p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <span class="addCartListButton">\n\n            <button ion-button class="button btn-round BtnClass" (click)="viewDetails(allOrders)" text-right>View details\n\n            </button>\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n     \n\n  </ion-item>\n\n  <!-- <p class="noprod" *ngIf="!allOrder.length > 0"> <ion-icon ios="ios-alert" md="md-alert"></ion-icon>{{\'No Orders Found\'}}</p> -->\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/myorder/myorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__["a" /* DataHandler */]])
    ], MyorderPage);
    return MyorderPage;
}());

//# sourceMappingURL=myorder.js.map

/***/ })

});
//# sourceMappingURL=16.js.map