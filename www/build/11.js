webpackJsonp([11],{

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ProductPageModule);
    return ProductPageModule;
}());

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_alert_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Datahandler_datahandler__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, toast, loader, _alert, Toast, dataHandler, serviceHandler, events, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.loader = loader;
        this._alert = _alert;
        this.Toast = Toast;
        this.dataHandler = dataHandler;
        this.serviceHandler = serviceHandler;
        this.events = events;
        this.navParams = navParams;
        this.lst_Product = [];
        this.pageNumber = 0;
        this.isLoaded = false;
        this.pageNumberPerScroll = 0;
        this.cat = this.navParams.get("cat");
        this.mobile = this.navParams.get("mobile");
        this.title = this.cat.name;
        //     this.dataHandler.storage.get("selectWholesaler").then(selectWholesaler => {
        //     this.mobile = selectWholesaler.mobile;
        // }) 
        this.dataHandler.storage.get("selectedLanguages").then(function (selectedLanguages) {
            _this.lang = selectedLanguages.code;
            _this.viewCart();
            _this.products();
            _this.dataHandler.storage.get("mobile").then(function (mobile) {
                _this.retailermobileno = mobile;
            });
        });
    }
    ProductPage.prototype.viewDetails = function (product) {
        this.navCtrl.push('ProductdetailsPage', { product: product });
    };
    ProductPage.prototype.addtocart = function (product, qty) {
        var _this = this;
        //added null while checking - Mythreyi - bug fixed - 4025
        if (qty != undefined && qty != null && qty != "") {
            var data = {
                userId: product.sku,
                sku: product.sku,
                mobile: this.retailermobileno,
                name: product.name,
                qty: qty,
                price: product.price,
                image: product.image,
                wholesaler: product.wholesaler
            };
            this.serviceHandler.Add_To_Cart(data).then(function (val) {
                _this.loader.show();
                _this.toast.show("Product added into cart successfully");
                _this.viewCart();
                _this.loader.hide();
            });
        }
        else {
            this.loader.hide();
            this.toast.show("Please select quantity");
        }
    };
    ProductPage.prototype.products = function () {
        var _this = this;
        this.serviceHandler.Get_All_Products(this.cat._id, this.pageNumber, this.lang, this.mobile).then(function (product) {
            if (product['code'] == 200) {
                _this.lst_Product = product['message'];
                _this.isLoaded = true;
            }
            else {
                // this.isLoaded == false;
            }
        });
    };
    ProductPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.pageNumberPerScroll = this.pageNumberPerScroll + 1;
        this.serviceHandler.Get_All_Products(this.cat._id, this.pageNumberPerScroll, this.lang, this.mobile).then(function (productData) {
            if (productData['code'] != 402) {
                _this.lst_Productsnew = productData['message'];
                _this.lst_Product = _this.lst_Product.concat(_this.lst_Productsnew);
                infiniteScroll.complete();
                _this.isLoaded = true;
            }
            else {
                // this.isLoaded == false;
            }
        }, function (err) {
        });
    };
    ProductPage.prototype.viewCart = function () {
        var _this = this;
        this.serviceHandler.View_Cart(this.retailermobileno).then(function (value) {
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
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/product/product.html"*/'\n\n\n\n<header [withlogo]=false [titleHeader]="title"></header>\n\n\n\n<ion-content>\n\n   <!-- sub cat code  -->\n\n  <!-- <ion-scroll class="scroll" scrollX="true">\n\n    <ion-item class="catimage">\n\n      <span >\n\n        <div text-center>\n\n          <img class="dash-bg" src="" onerror="this.onerror=null;this.src=\'../../assets/imgs/daal.jpg\'" />\n\n        </div>\n\n      </span>\n\n      <span class="text-black">Toor Dal</span>\n\n    </ion-item>\n\n  </ion-scroll> -->\n\n\n\n  <!-- <ion-list *ngIf=" !isLoaded == false">\n\n    <ion-scroll class="varian" scrollX="true">\n\n      <span>\n\n        <button class="varians" ion-button round>2kg</button>\n\n        <button class="varians" ion-button round>5kg</button>\n\n        <button class="varians" ion-button round>10kg</button>\n\n        <button class="varians" ion-button round>15kg</button>\n\n        <button class="varians" ion-button round>20kg</button>\n\n        <button class="varians" ion-button round>25kg</button>\n\n      </span>\n\n    </ion-scroll>\n\n\n\n  </ion-list> -->\n\n\n\n    <!-- <span > -->\n\n        <ion-list class="cart" >\n\n      <span  *ngFor = "let product of lst_Product;">\n\n    <ion-row >\n\n      <ion-col col-4>\n\n        <img class="cardImage" src="{{product.image}}" onerror="this.onerror=null;this.src=\'assets/imgs/icon.png\'" />\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <span class="title">{{product.name}}</span>\n\n        <p class="sku">SKU ID :{{product.sku}}</p>\n\n        <p class="sku">GST : {{product.gst * 100}}%</p>\n\n        <p class="sku">Size : {{product.size}}</p>\n\n        <p class="price"> {{ product.price | currency: "INR" }}</p>\n\n        <strong class="total" *ngIf=\'product.quantity >= 1 \'>Total: ₹ {{ product.quantity * product.price | number:\'1.2-5\'}}</strong>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <ion-input class="qtyInput" type="tel" placeholder="Qty" [(ngModel)]="product.quantity" #qty="ngModel" name="qty" minlength="1" maxlength="3"\n\n          oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" >{{product.quantity}}</ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row  >\n\n      <ion-col col-6>\n\n        <button ion-button class="cartButton" clear (click)="viewDetails(product)">   <ion-icon class="smIcon" ios="ios-eye" md="md-eye"></ion-icon>\n\n          View details</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button class="cartButton" clear   (click)="addtocart(product,product.quantity)"><ion-icon class="smIcon"  md="md-add"></ion-icon>Add to cart</button>\n\n      </ion-col>\n\n    </ion-row>\n\n   \n\n  <!-- </span> -->\n\n</span>\n\n  </ion-list>\n\n\n\n<!-- -----------------------------scrolling thing ------------------------------->\n\n\n\n   <!-- <p class="noprod" *ngIf=" !isLoaded == true"> <ion-icon ios="ios-alert" md="md-alert"></ion-icon>No product found</p> -->\n\n\n\n <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingText="Loading more..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n    -->\n\n\n\n\n\n\n\n\n\n  <!-- <ion-grid padding *ngIf=" !isLoaded == true" class="emptyCartCol">\n\n      <ion-row>\n\n        <ion-col>\n\n          <span class="helper">No Product Found</span>\n\n          <img src="assets/imgs/empty_cart.png" class="emptyCart"></ion-col> -->\n\n      <!-- </ion-row>\n\n    </ion-grid> -->\n\n</ion-content>'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_5__providers_services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_6__Datahandler_datahandler__["a" /* DataHandler */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=11.js.map