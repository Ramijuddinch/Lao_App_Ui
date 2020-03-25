webpackJsonp([19],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Datahandler_datahandler__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_loader__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loader, menu, serviceHandler, navParams, dataHandler) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loader = loader;
        this.menu = menu;
        this.serviceHandler = serviceHandler;
        this.navParams = navParams;
        this.dataHandler = dataHandler;
        this.isStore = false;
        this.catList = [];
        this.allWholesalers = [];
        this.getAllWholesalers();
        this.dataHandler.storage.get("selectWholesaler").then(function (selectWholesaler) {
            _this.selectWholesaler = selectWholesaler;
            _this.mobile = selectWholesaler.mobile;
            _this.serviceHandler.Get_All_Categories(_this.mobile).then(function (res) {
                _this.catList = res['message'];
                _this.catcategories = _this.catList[0].categories;
            });
        });
        // this.dataHandler.storage.get("mobile").then(mobile => {
        // this.mobile = mobile;
        // })
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.getAllWholesalers = function () {
        var _this = this;
        this.serviceHandler.Get_All_Wholesalers().then(function (response) {
            _this.allWholesalers = response['message'];
        });
    };
    HomePage.prototype.subcategoryPage = function (cate) {
        this.navCtrl.push('ProductPage', { cat: cate, mobile: this.mobile });
    };
    HomePage.prototype.selectSW = function (wholeseller) {
        this.loader.show();
        this.dataHandler.storage.set('selectWholesaler', wholeseller);
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        this.loader.hide();
    };
    HomePage.prototype.closeButon = function () {
        this.isStore == false;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/home/home.html"*/'<!-- \n\n<ion-header  no-border>\n\n  <ion-navbar>\n\n          <ion-buttons left icon-only class="bgimgmenuwidth">\n\n              <button icon-only menuToggle class="bgimgmenuwidth" (click)="onOpenMenu()">\n\n                  <img class="bgimgmenu" src="assets/icon/menu.svg" alt="">\n\n              </button>\n\n            \n\n          </ion-buttons>\n\n          <ion-title > <img class="logo" src="../../assets/imgs/icon.png" /> </ion-title>\n\n          <ion-buttons right>\n\n              <button  ion-button icon-only (click)="cart()">\n\n                      <ion-icon class="cartIcon" name="cart"></ion-icon>\n\n              </button>\n\n              <button class="cartIcon"  ion-button icon-only (click)="OpenNotification()">\n\n                  <ion-icon name="notifications"></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n  </ion-navbar>\n\n\n\n<ion-searchbar [(ngModel)]="searchItem" animated="true" (ionInput)="setFilteredCategory($event)" placeholder="Search"\n\nautocorrect="on" spellcheck="true">\n\n<ion-icon name="close"></ion-icon>\n\n</ion-searchbar>\n\n</ion-header> -->\n\n<header [withlogo]=true></header>\n\n<ion-content>\n\n  <!-- <ion-row >\n\n        <div class="autocomplete">\n\n          <ion-searchbar [(ngModel)]="searchText" (ionInput)="retailerNameFilter()" autocorrect="on" spellcheck="true"\n\n            animated="true" showCancelButton="true" placeholder="Select wholeseller" >\n\n            <ion-icon (click)="clear()" name="close"></ion-icon>\n\n          </ion-searchbar>\n\n          <ion-list >\n\n          </ion-list>\n\n        </div>\n\n      </ion-row> -->\n\n\n\n  <ion-card class="StoreCard">\n\n    <ion-item style="background-color:#b7cc92">\n\n      <ion-row *ngIf = "selectWholesaler">\n\n        <ion-col col-3 >\n\n          <!-- <ion-avatar item-start class="stor"> -->\n\n            <span>\n\n              <img class="storeImg" src="" onerror="this.onerror=null;this.src=\'assets/imgs/store.png\'" />\n\n            </span>\n\n          <!-- </ion-avatar> -->\n\n        </ion-col>\n\n        <ion-col>\n\n          <span>\n\n            <h2 text-wrap class="HText">{{selectWholesaler.name}} </h2>\n\n            <!-- <h2 text-wrap class="HText"> Nungambakkam</h2> -->\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- <ion-row>\n\n        <ion-col><span class="ClearBtn" (click)="closeButon()">\n\n            <ion-icon name="close"></ion-icon>\n\n          </span></ion-col>\n\n      </ion-row> -->\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <h3>Top Wholeseller</h3>\n\n  <ion-row>\n\n    <ion-slides loop="true" autoplay="true" class="smallImges" slidesPerView="3">\n\n      <ion-slide style="padding:2px" *ngFor="let wholeseller of  allWholesalers"   >\n\n        <span (click)="selectSW(wholeseller)">\n\n        <img class="store" src="assets/imgs/store.png" />\n\n        <span style="font-size:14px;white-space: nowrap;">{{wholeseller.name}}</span>\n\n      </span>\n\n      </ion-slide>\n\n      <!-- <ion-slide style="padding:2px">\n\n        <img class="store" src="assets/imgs/store.png" />\n\n        <span>My Store 2</span>\n\n      </ion-slide>\n\n      <ion-slide style="padding:2px">\n\n        <img class="store" src="assets/imgs/store.png" />\n\n        <span>My Store 3</span>\n\n      </ion-slide> -->\n\n    </ion-slides>\n\n  </ion-row>\n\n\n\n  <h3>All Categories</h3>\n\n  <ion-row style="margin-top: 0px" *ngFor="let cat of catList" >\n\n    \n\n    <ion-col>\n\n      <button class="cusbutton">{{cat._id}}</button>\n\n    </ion-col>\n\n    <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-6 *ngFor="let subcat of cat.categories" (click)="subcategoryPage(subcat)">\n\n              <img class="cate" src="{{subcat.image}}" />\n\n              <p text-center style="font-weight: 500;">{{subcat.name}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n        </ion-grid>\n\n    <!-- <ion-slides loop="true" slidesPerView="1" class="smallImges"   >\n\n        <span  *ngFor="let subcat of cat.categories">\n\n      <ion-slide style="padding:3px"  (click)="subcategoryPage(subcat)">\n\n       \n\n        <img class="cate" src="assets/imgs/rice.jpg" />\n\n        <span style="font-weight: 500;">{{subcat.name}}</span>\n\n      </span>\n\n      </ion-slide>\n\n\n\n    </ion-slides> -->\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__Datahandler_datahandler__["a" /* DataHandler */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=19.js.map