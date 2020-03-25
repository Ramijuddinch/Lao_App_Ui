webpackJsonp([9],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickcartPageModule", function() { return QuickcartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quickcart__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuickcartPageModule = /** @class */ (function () {
    function QuickcartPageModule() {
    }
    QuickcartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quickcart__["a" /* QuickcartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quickcart__["a" /* QuickcartPage */]),
            ],
        })
    ], QuickcartPageModule);
    return QuickcartPageModule;
}());

//# sourceMappingURL=quickcart.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_loader__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuickcartPage = /** @class */ (function () {
    function QuickcartPage(navCtrl, events, loader, viewCtrl, dataHandler, serviceHandler, menu, toast, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.loader = loader;
        this.viewCtrl = viewCtrl;
        this.dataHandler = dataHandler;
        this.serviceHandler = serviceHandler;
        this.menu = menu;
        this.toast = toast;
        this.navParams = navParams;
        this.searchItem = "";
        this.searchList = [];
        this.searchListNew = [];
        this.pageNumber = 1;
        this.pageNumberPerScroll = 0;
        this.isLoaded = false;
        this.events.subscribe('productCount:addCount', function (productLength, addCount) {
            if (addCount == true) {
                _this.productLength = productLength;
            }
        });
        this.dataHandler.storage.get("selectedLanguages").then(function (lang) {
            _this.langCode = lang.code;
            _this.dataHandler.storage.get("selectWholesaler").then(function (saler) {
                _this.mobile = saler.mobile;
                _this.quickAllProducts();
            });
        });
        this.dataHandler.storage.get("mobile").then(function (mobile) {
            _this.retailermobileno = mobile;
            _this.viewCart();
        });
    }
    QuickcartPage.prototype.quickAllProducts = function () {
        var _this = this;
        this.serviceHandler.Guick_All_products(this.pageNumberPerScroll, this.langCode, this.mobile).then(function (searchFilterData) {
            _this.loader.show();
            _this.searchList = searchFilterData['message'];
            _this.loader.hide();
            _this.isLoaded = true;
        });
    };
    QuickcartPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.pageNumberPerScroll = this.pageNumberPerScroll + 1;
        this.serviceHandler.Guick_All_products(this.pageNumberPerScroll, this.langCode, this.mobile).then(function (productData) {
            if (productData['code'] != 402) {
                _this.searchListNew = productData['message'];
                _this.searchList = _this.searchList.concat(_this.searchListNew);
                infiniteScroll.complete();
                _this.isLoaded = true;
            }
            else {
            }
        }, function (err) {
        });
    };
    QuickcartPage.prototype.onOpenMenu = function () {
        this.menu.open();
    };
    QuickcartPage.prototype.viewDetails = function (product) {
        this.navCtrl.push('ProductdetailsPage', { product: product });
    };
    QuickcartPage.prototype.addtocart = function (product, qty) {
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
    QuickcartPage.prototype.cart = function () {
        this.navCtrl.push('MycartPage');
    };
    QuickcartPage.prototype.viewCart = function () {
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
    QuickcartPage.prototype.setFilteredCategory = function (event) {
        var _this = this;
        this.pageNumberPerScroll = 0;
        if (this.searchItem.length > 2) {
            this.serviceHandler.Quick_Cart(this.searchItem, this.pageNumberPerScroll, this.langCode, this.mobile).then(function (searchFilterData) {
                _this.searchList = searchFilterData['message'];
            });
        }
        else {
            this.quickAllProducts();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('searchInput'),
        __metadata("design:type", Object)
    ], QuickcartPage.prototype, "sInput", void 0);
    QuickcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-quickcart',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/quickcart/quickcart.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left icon-only class="bgimgmenuwidth">\n\n          <button icon-only menuToggle class="bgimgmenuwidth" (click)="onOpenMenu()">\n\n              <img class="bgimgmenu" src="assets/icon/menu.svg" alt="">\n\n          </button>\n\n        </ion-buttons>\n\n    <ion-title>Quick cart</ion-title>\n\n    <ion-buttons right>\n\n        <button  ion-button icon-only (click)="cart()">\n\n            <ion-icon style="color: #fff" name="cart"></ion-icon>\n\n            <ion-badge class="cart-badge" *ngIf="productLength != 0">{{productLength}}</ion-badge>\n\n            <ion-badge class="cart-badge" *ngIf="productLength == 0"></ion-badge>\n\n    </button>\n\n\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <!-- <ion-searchbar [(ngModel)]="searchItem" animated="true"  placeholder="Search wholeseller"\n\n    autocorrect="on" spellcheck="true"  (ionInput)="setFilteredCategory($event)" >\n\n    <ion-icon name="close"></ion-icon>\n\n    </ion-searchbar> -->\n\n    <ion-searchbar  [(ngModel)]="searchItem"  showCancelButton="true" animated="true"\n\n    (ionInput)="setFilteredCategory($event)" placeholder="{{\'Search products\'}}" autocorrect="on"\n\n    spellcheck="true">\n\n    <ion-icon name="close"></ion-icon>\n\n  </ion-searchbar>\n\n\n\n\n\n    <ion-list class="cart">\n\n      <span  *ngFor="let searchFilterItem of searchList ;let i =index">\n\n        <ion-row>\n\n          <ion-col col-4   >\n\n              <img class="cardImage" src="{{searchFilterItem.image}}" onerror="this.onerror=null;this.src=\'assets/imgs/icon.png\'" />\n\n          </ion-col >\n\n          <ion-col col-6>\n\n            <span class="title">{{searchFilterItem.name}}</span>\n\n            <p class="sku">SKU ID :{{searchFilterItem.sku}}</p>\n\n            <p class="sku">GST : {{searchFilterItem.gst * 100}}%</p>\n\n            <p class="sku">Size : {{searchFilterItem.size}}</p>\n\n            <p class="price"> {{ searchFilterItem.price | currency: "INR" }}</p>\n\n            <strong class="price" *ngIf=\'searchFilterItem.quantity >= 1 \'>Total: ₹ {{ searchFilterItem.quantity * searchFilterItem.price | number:\'1.2-5\'}}</strong>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n                    <ion-input class="qtyInput" type="tel" placeholder="Qty" [(ngModel)]="searchFilterItem.quantity" #qty="ngModel" name="qty" minlength="1" maxlength="3"\n\n                    oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" >{{searchFilterItem.quantity}}</ion-input>\n\n             </ion-col>\n\n        </ion-row>\n\n     \n\n        <ion-row>\n\n          <ion-col col-6>\n\n              <button ion-button  class="cartButton" clear (click)="viewDetails(searchFilterItem)"><ion-icon class="smIcon" ios="ios-eye" md="md-eye"></ion-icon>View details</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <button ion-button  class="cartButton" clear (click)="addtocart(searchFilterItem,searchFilterItem.quantity)"><ion-icon class="smIcon"  md="md-add"></ion-icon>Add to cart</button>\n\n            </ion-col>\n\n        </ion-row>\n\n      </span>\n\n        </ion-list>\n\n        <p class="noprod" *ngIf=" !isLoaded == true"> <ion-icon ios="ios-alert" md="md-alert"></ion-icon>No product found</p>\n\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n          <ion-infinite-scroll-content loadingText="Loading more..."></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/quickcart/quickcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__["a" /* DataHandler */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_toast__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], QuickcartPage);
    return QuickcartPage;
}());

//# sourceMappingURL=quickcart.js.map

/***/ })

});
//# sourceMappingURL=9.js.map