webpackJsonp([14],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageModule", function() { return OfferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OfferPageModule = /** @class */ (function () {
    function OfferPageModule() {
    }
    OfferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], OfferPageModule);
    return OfferPageModule;
}());

//# sourceMappingURL=offer.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferPage = /** @class */ (function () {
    function OfferPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OfferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferPage');
    };
    OfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-offer',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/offer/offer.html"*/'\n\n<header [withlogo]=false [titleHeader]="\'Offers\'"></header>\n\n<ion-content style="margin-top: 10px">\n\n    <ion-row>\n\n        <ion-slides style="margin-top: 13%;" loop="true" pager="true" autoplay="true" slidesPerView="1">\n\n          <ion-slide class="silder">\n\n            <img class="topBanner" \n\n             src="assets/imgs/offer1.png" />\n\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-row>\n\n\n\n      <ion-row style="margin-top: 15px">\n\n          <ion-slides loop="true" pager="true" autoplay="true" slidesPerView="1">\n\n            <ion-slide class="silder">\n\n              <img class="topBanner" \n\n               src="assets/imgs/offer2.jpg" />\n\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-row>\n\n\n\n        <ion-row style="margin-top: 15px">\n\n            <ion-slides loop="true" pager="true" autoplay="true" slidesPerView="1">\n\n              <ion-slide class="silder">\n\n                <img class="topBanner" \n\n                 src="assets/imgs/offer3.jpg" />\n\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/offer/offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OfferPage);
    return OfferPage;
}());

//# sourceMappingURL=offer.js.map

/***/ })

});
//# sourceMappingURL=14.js.map