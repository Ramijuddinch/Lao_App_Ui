webpackJsonp([2],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WholsellerPageModule", function() { return WholsellerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wholseller__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WholsellerPageModule = /** @class */ (function () {
    function WholsellerPageModule() {
    }
    WholsellerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wholseller__["a" /* WholsellerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wholseller__["a" /* WholsellerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], WholsellerPageModule);
    return WholsellerPageModule;
}());

//# sourceMappingURL=wholseller.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WholsellerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Datahandler_datahandler__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WholsellerPage = /** @class */ (function () {
    function WholsellerPage(navCtrl, serviceHandler, storage, events, navParams, loader, dataHandler) {
        this.navCtrl = navCtrl;
        this.serviceHandler = serviceHandler;
        this.storage = storage;
        this.events = events;
        this.navParams = navParams;
        this.loader = loader;
        this.dataHandler = dataHandler;
        this.allWholesalers = [];
        this.getAllWholesalers();
    }
    WholsellerPage.prototype.ionViewDidLoad = function () {
    };
    WholsellerPage.prototype.getAllWholesalers = function () {
        var _this = this;
        this.serviceHandler.Get_All_Wholesalers().then(function (response) {
            _this.allWholesalers = response['message'];
        });
    };
    WholsellerPage.prototype.selectedWholesaler = function (wholeseller) {
        this.dataHandler.storage.set('selectWholesaler', wholeseller);
        this.navCtrl.push('TabPage');
    };
    WholsellerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wholseller',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/wholseller/wholseller.html"*/'\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Wholeseller</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<header [withlogo]=false [titleHeader]="\'Wholeseller\'"></header>\n\n<ion-content >\n\n    <ion-searchbar [(ngModel)]="searchItem" animated="true"  placeholder="Search wholeseller"\n\n    autocorrect="on" spellcheck="true">\n\n    <ion-icon name="close"></ion-icon>\n\n    </ion-searchbar>\n\n    <ion-grid>\n\n        <ion-row >\n\n          <ion-col col-6 *ngFor="let wholeseller of  allWholesalers" >\n\n              <ion-card (click)="selectedWholesaler(wholeseller)">\n\n                  <img class="img" src="assets/imgs/store.png"/>\n\n                  <ion-card-content>\n\n                    <ion-card-title>\n\n                     {{wholeseller.name}}\n\n                      </ion-card-title>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n          </ion-col >\n\n          <!-- <ion-col col-6>\n\n              <ion-card>\n\n                  <img class="img" src="assets/imgs/store.png"/>\n\n                  <ion-card-content>\n\n                    <ion-card-title>\n\n                     Ram\n\n                      </ion-card-title>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n          </ion-col> -->\n\n        </ion-row>\n\n        <!-- <ion-row>\n\n            <ion-col col-6>\n\n                <ion-card>\n\n                    <img class="img" src="assets/imgs/store.png"/>\n\n                    <ion-card-content>\n\n                      <ion-card-title>\n\n                       Raj\n\n                        </ion-card-title>\n\n                    </ion-card-content>\n\n                  </ion-card>\n\n            </ion-col >\n\n            <ion-col col-6>\n\n                <ion-card>\n\n                    <img class="img" src="assets/imgs/store.png"/>\n\n                    <ion-card-content>\n\n                      <ion-card-title>\n\n                       Karthik\n\n                        </ion-card-title>\n\n                    </ion-card-content>\n\n                  </ion-card>\n\n            </ion-col>\n\n           \n\n          </ion-row> -->\n\n        </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/wholseller/wholseller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_3__Datahandler_datahandler__["a" /* DataHandler */]])
    ], WholsellerPage);
    return WholsellerPage;
}());

//# sourceMappingURL=wholseller.js.map

/***/ })

});
//# sourceMappingURL=2.js.map