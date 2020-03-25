webpackJsonp([12],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OtpPageModule = /** @class */ (function () {
    function OtpPageModule() {
    }
    OtpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__otp__["a" /* OtpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__otp__["a" /* OtpPage */]),
            ],
        })
    ], OtpPageModule);
    return OtpPageModule;
}());

//# sourceMappingURL=otp.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service_cognito_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_toast__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, cognitoService, toast, navParams) {
        this.navCtrl = navCtrl;
        this.cognitoService = cognitoService;
        this.toast = toast;
        this.navParams = navParams;
        this.signInModel = this.navParams.get('signInModel');
    }
    OtpPage.prototype.ionViewDidLoad = function () {
    };
    OtpPage.prototype.Verify = function (verificationCode, mobile) {
        // (mobile) ? this.signInModel.mobileNo = mobile : null;
        // this.cognitoService.confirmUser(verificationCode, this.signInModel.mobileNo).then(res => {
        this.navCtrl.setRoot('RegistrationPage');
        // })
        //     .catch((error) => {
        //     this.toast.show(error.message);
        // })
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/otp/otp.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>otp</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n    <form #OTP="ngForm">\n\n  <h4 class="ver">Verification</h4>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <img class="logo" src=\'assets/imgs/icon.png\'>\n\n    </ion-col>\n\n  </ion-row>\n\n  <h1 class="otpText">OTP has been sent to your mobile number </h1>\n\n  <p class="mobile">+91{{signInModel.mobileNo}}</p>\n\n  <ion-list class="items-middle" text-center>\n\n    <ion-item no-lines class="otpcontainer">\n\n      <ion-input autofocus no-margin class="otpInput "  type="tel" name="inputopt1" #inputopt1="ngModel"\n\n        [(ngModel)]="otp" maxlength="4" minlength="4" (keyup.enter)="verifyOtp(otp)" oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" required></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row style="margin-top: 20%">\n\n    <ion-col>\n\n      <button ion-button round class="smallbutton"  [disabled]="OTP.invalid" (click)="Verify(otp)">Verify</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service_cognito_service__["a" /* CognitoServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_services_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ })

});
//# sourceMappingURL=12.js.map