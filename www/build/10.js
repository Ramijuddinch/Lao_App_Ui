webpackJsonp([10],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsPageModule", function() { return ProductdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetails__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductdetailsPageModule = /** @class */ (function () {
    function ProductdetailsPageModule() {
    }
    ProductdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ProductdetailsPageModule);
    return ProductdetailsPageModule;
}());

//# sourceMappingURL=productdetails.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_global__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductdetailsPage = /** @class */ (function () {
    function ProductdetailsPage(navCtrl, Toast, dataHandler, serviceHandler, events, global, toast, loader, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.Toast = Toast;
        this.dataHandler = dataHandler;
        this.serviceHandler = serviceHandler;
        this.events = events;
        this.global = global;
        this.toast = toast;
        this.loader = loader;
        this.navParams = navParams;
        this.product = this.navParams.get("product");
        this.title = this.product.name;
        this.dataHandler.storage.get("mobile").then(function (mobile) {
            _this.mobile = mobile;
            _this.viewCart();
        });
    }
    ProductdetailsPage.prototype.ionViewDidLoad = function () {
    };
    ProductdetailsPage.prototype.addtocart = function (product, qty) {
        var _this = this;
        if (qty != undefined) {
            var data = {
                userId: product.sku,
                sku: product.sku,
                mobile: this.mobile,
                name: product.name,
                qty: qty,
                price: product.price,
                image: product.image,
                wholesaler: product.wholesaler
            };
            this.serviceHandler.Add_To_Cart(data).then(function (val) {
                _this.loader.show();
                _this.toast.show("Product added into cart successfully ");
                _this.viewCart();
                _this.loader.hide();
            });
        }
        else {
            this.loader.hide();
            this.toast.show("Please select quantity ");
        }
    };
    ProductdetailsPage.prototype.viewCart = function () {
        var _this = this;
        this.serviceHandler.View_Cart(this.mobile).then(function (value) {
            if (value['code'] == 200) {
                _this.viewcartlength = value['message'].length;
                _this.cartCount = _this.viewcartlength;
                _this.events.publish("productCount:addCount", _this.cartCount, true);
            }
            else {
                _this.cartCount = 0;
                _this.events.publish("productCount:addCount", _this.cartCount, true);
            }
        });
    };
    ProductdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-productdetails',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/productdetails/productdetails.html"*/'\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Toor daal 1kg</ion-title>\n\n    <ion-buttons right>\n\n        <button  ion-button icon-only (click)="cart()">\n\n                <ion-icon style="color: #fff" name="cart"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<header [withlogo]=false [titleHeader]="title"></header>\n\n<ion-content >\n\n    <!-- <ion-scroll class="" scrollX="true" style="background-color: transparent;height: 53px;margin-top: 17%;    margin-left: 3%;">\n\n          <span>\n\n              <button class="varians" ion-button round>2kg</button> \n\n              <button class="varians" ion-button round>5kg</button>\n\n              <button class="varians" ion-button round>10kg</button>\n\n              <button class="varians" ion-button round>15kg</button>\n\n           \n\n          </span>\n\n      </ion-scroll> -->\n\n    <ion-slides pager class="image-slider" loop="true" slidesPerView="1">\n\n        <ion-slide >\n\n            <img style="height: 250px;"  src="{{product.image}}" class="thumb-img" onerror="this.onerror=null;this.src=\'assets/imgs/icon.png\'" imageViewer />\n\n        </ion-slide>\n\n    </ion-slides>\n\n    \n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <p class="price"> {{ product.price | currency: "INR" }}</p>\n\n        <p class="sku">SKU ID : {{ product.sku  }}</p>\n\n        <p class="sku">GST : {{product.gst * 100}}%</p>\n\n        <p class="sku">Size : {{product.size}}</p>\n\n\n\n      </ion-col>\n\n      <ion-col col-3>\n\n          <ion-input class="qtyInput" type="tel" placeholder="Qty"  [(ngModel)]="product.quantity" \n\n                   minlength="1" maxlength="3" oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'">{{product.quantity}}</ion-input>\n\n        </ion-col>\n\n    </ion-row>\n\n    <h3>Description</h3>\n\n    <ion-row>\n\n        <p class="desc" [innerHTML]="product.description">{{product.description}}</p>\n\n    </ion-row>\n\n</ion-content>\n\n<ion-footer no-border>\n\n        <button ion-button full text-uppercase  class="button"  (click)=\'addtocart(product,product.quantity)\'><ion-icon class="smIcon"  md="md-add"></ion-icon>Add to cart</button>\n\n  </ion-footer>'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/productdetails/productdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__["a" /* DataHandler */],
            __WEBPACK_IMPORTED_MODULE_5__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_services_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProductdetailsPage);
    return ProductdetailsPage;
}());

//# sourceMappingURL=productdetails.js.map

/***/ })

});
//# sourceMappingURL=10.js.map