webpackJsonp([17],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycartPageModule", function() { return MycartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycart__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MycartPageModule = /** @class */ (function () {
    function MycartPageModule() {
    }
    MycartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mycart__["a" /* MycartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mycart__["a" /* MycartPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], MycartPageModule);
    return MycartPageModule;
}());

//# sourceMappingURL=mycart.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_alert_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_global__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { global } from '@angular/core/src/util';
var MycartPage = /** @class */ (function () {
    function MycartPage(navCtrl, events, alert, loader, toast, serviceHandler, alertCtrl, navParams, dataHandler, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.alert = alert;
        this.loader = loader;
        this.toast = toast;
        this.serviceHandler = serviceHandler;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.dataHandler = dataHandler;
        this.global = global;
        this.isProduct = false;
        this.total = global.total;
        this.cartCount = global.cartCount;
        this.dataHandler.storage.get("mobile").then(function (mobile) {
            _this.mobile = mobile;
            _this.viewCart();
        });
    }
    MycartPage.prototype.ionViewDidLoad = function () {
    };
    MycartPage.prototype.calculateTotalAmount = function () {
        var _this = this;
        this.global.total = 0;
        this.global.viewcart.forEach(function (product) {
            _this.global.total += parseFloat(product.price) * parseFloat(product.qty);
        });
    };
    MycartPage.prototype.getqty = function (product) {
        var _this = this;
        var numpattern = new RegExp("^[1-9][0-9]\d*$");
        this.pattern = numpattern.test(product.qty);
        if (this.pattern != false) {
            var data = {
                userId: product.sku,
                sku: product.sku,
                mobile: this.mobile,
                name: product.name,
                qty: product.qty,
                price: product.price,
                image: product.image,
                wholesaler: product.wholesaler
            };
            this.serviceHandler.Add_To_Cart(data).then(function (val) {
                _this.loader.show();
                _this.viewCart();
                _this.calculateTotalAmount();
                _this.loader.hide();
            });
        }
        else {
            this.toast.show('Please enter valid quantity ');
        }
    };
    MycartPage.prototype.removecart = function (cart) {
        var _this = this;
        this.alert.showConfirm("Confirm Remove", "Are you sure you want to remove this item from cart?", "No", "Yes")
            .then(function (status) {
            if (status) {
                console.log(status, '28374678484498585');
                console.log(cart._id, '023089855888');
                _this.serviceHandler.Remove_Cart(cart._id).then(function (val) {
                    // if(val['result'] != 402){
                    _this.toast.show('Product is removed from your cart');
                    _this.viewCart();
                    _this.calculateTotalAmount();
                    // }
                });
            }
        });
        this.viewCart();
    };
    MycartPage.prototype.viewCart = function () {
        var _this = this;
        this.serviceHandler.View_Cart(this.mobile).then(function (value) {
            console.log(value['WholesalerAddress'], "test");
            if (value['code'] == 200) {
                _this.global.viewcart = value['message'];
                _this.global.WholesalerAddress = value['WholesalerAddress'];
                _this.viewcartlength = value['message'].length;
                _this.global.cartCount = _this.viewcartlength;
                _this.events.publish("productCount:addCount", _this.cartCount, true);
                _this.calculateTotalAmount();
                _this.isProduct = true;
            }
            else {
                if (value['code'] == 402) {
                    _this.global.cartCount = 0;
                    _this.global.viewcart = [];
                    _this.events.publish("productCount:addCount", _this.cartCount, true);
                    _this.isProduct = false;
                }
                else {
                }
            }
        });
    };
    MycartPage.prototype.proceedCheckout = function () {
        //adding grand total - bug - 4022 - Mythreyi
        // let data = {
        //   userId:this.mobile,
        //   mobile:this.mobile,
        //   grandTotal:this.total,
        //   order: this.viewcart
        // }
        console.log(this.total, "7777777777777777");
        console.log(this.cartCount, "888888888888888");
        // this.serviceHandler.Place_Order(data).then(val =>{
        //   if(val['code']== 200){
        //       this.orderId = val['orderId'];
        // this.navCtrl.push('ThankyouPage',{orderID : this.orderId })
        this.navCtrl.push('OrdersummeryPage');
        //     }else{
        //     }
        //   })
    };
    MycartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mycart',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/mycart/mycart.html"*/'<header [withlogo]=false [titleHeader]="\'My Cart\'"></header>\n\n<ion-content>\n\n  <ion-card style="margin-top: 0%;"  *ngFor = "let cart of global.viewcart">\n\n    <!-- <ion-card-content> -->\n\n      <ion-row >\n\n        <ion-col col-4>\n\n          <img class="cardImage" src="{{cart.image}}" onerror="this.onerror=null;this.src=\'assets/imgs/icon.png\'" />\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <span class="title">{{cart.name}}</span>\n\n          <p class="title">SKU ID :{{cart.sku}}</p>\n\n          <!-- <p class="sku">GST : {{cart.gst * 100}}%</p>\n\n          <p class="sku">Size : {{cart.size}}</p> -->\n\n          <p class="price"> {{ cart.price | currency: "INR" }}</p>\n\n          <p class="price"> Total :{{ cart.totalPrice }}</p>\n\n        </ion-col>\n\n        <ion-col>\n\n          <span class="icon text-light" (click)="removecart(cart)">\n\n            <img class="deleteIcon" src="assets/icon/Delete.svg" />\n\n          </span>\n\n          <ion-input class="qtyInput" type="tel" placeholder="Qty" [(ngModel)]="cart.qty" minlength="1" maxlength="3" (change)="getqty(cart)"\n\n            oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'">{{cart.qty}}</ion-input>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    <!-- </ion-card-content> -->\n\n  </ion-card>\n\n\n\n  <ion-row  *ngIf="isProduct != false">\n\n    <ion-col col-6>\n\n      <span class="grandTotal">\n\n        Grand total\n\n      </span>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <span class="grand">\n\n         ₹{{  total | number:\'1.2-2\'}}\n\n      </span>\n\n    </ion-col>\n\n    <br><br>\n\n    <br><br>\n\n  </ion-row>\n\n  <br><br>\n\n  <ion-grid padding *ngIf="isProduct == false" class="emptyCartCol">\n\n      <ion-row>\n\n        <ion-col>\n\n          <img src="assets/imgs/empty_cart.png" class="emptyCart"></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n<!-- <ion-footer *ngIf = "isProduct != false"> -->\n\n  <ion-footer *ngIf = "isProduct == true">\n\n\n\n  <button ion-button full class="Button" (click)="proceedCheckout()">Proceed to Order</button>\n\n</ion-footer>'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/mycart/mycart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_5__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__["a" /* DataHandler */], __WEBPACK_IMPORTED_MODULE_7__providers_services_global__["a" /* GlobalProvider */]])
    ], MycartPage);
    return MycartPage;
}());

//# sourceMappingURL=mycart.js.map

/***/ })

});
//# sourceMappingURL=17.js.map