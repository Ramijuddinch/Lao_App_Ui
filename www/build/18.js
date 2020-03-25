webpackJsonp([18],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service_cognito_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_services__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, serviceHandler, events, navParams, storage, cognitoService, dataHandler) {
        this.navCtrl = navCtrl;
        this.serviceHandler = serviceHandler;
        this.events = events;
        this.navParams = navParams;
        this.storage = storage;
        this.cognitoService = cognitoService;
        this.dataHandler = dataHandler;
        this.signInModel = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function (signInModel) {
        if (signInModel.Password != signInModel.conpassword) {
        }
        else {
            // this.cognitoService.signUp(this.signInModel).then(res => {
            // console.log(res)
            this.dataHandler.storage.set('mobile', signInModel.mobileNo);
            this.events.publish('mobile', signInModel.mobileNo);
            this.dataHandler.storage.set('selectedLanguages', {
                code: 'en'
            });
            //commented by Mythreyi
            // this.navCtrl.push('OtpPage',{signInModel:signInModel});
            //changed by Mythreyi as per Chandra's mail
            this.navCtrl.setRoot('HomePage');
            // }).catch((error) => {
            //   console.log(error)
            //   // this.toastController.errorToast(error.message);
            // })
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/login/login.html"*/'\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n    <form #loginForm="ngForm">\n\n      \n\n  <ion-row>\n\n    <ion-col col-12>\n\n        <img class="logo" src=\'assets/imgs/icon.png\'>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Mobile Number</ion-label>\n\n        <ion-input  type="tel"  pattern="[5-9]{1}[0-9]{9}" name="mobile" #mobile="ngModel" [(ngModel)]="signInModel.mobileNo"  minlength="10" maxlength="10"   oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" required></ion-input>\n\n      </ion-item>\n\n      <div class="warning" *ngIf="mobile.errors?.pattern">*{{\'Please enter valid mobile Number number\'}}</div>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password"  name="password" #password="ngModel" [(ngModel)]="signInModel.Password" required></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Confirm password</ion-label>\n\n          <ion-input type="password" name="Conpassword" #Conpassword="ngModel" [(ngModel)]="signInModel.conpassword"  required></ion-input>\n\n        </ion-item>\n\n    \n\n    </ion-list>\n\n  <!-- <ion-row class="">\n\n      <ion-col class="col-static">\n\n        <ion-input class="input-cover" type="tel"  pattern="[5-9]{1}[0-9]{9}" name="mobile" #mobile="ngModel" [(ngModel)]="mobileNo"  minlength="10" maxlength="10" placeholder="Mobile Number"  oninput="this.value?this.value=this.value.replace(/(?![0-9])./gmi,\'\'):\'\'" required></ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div class="warning" *ngIf="mobile.errors?.pattern">*{{\'Please enter valid mobile Number number\'}}</div>\n\n    <ion-row class="">\n\n      <ion-col class="col-static">\n\n          <ion-input class="input-cover" type="password"  name="password" #password="ngModel" [(ngModel)]="Password"  placeholder="Password"   required></ion-input>\n\n        </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="">\n\n            <ion-col class="col-static">\n\n                <ion-input class="input-cover" type="password"  name="Conpassword" #Conpassword="ngModel" [(ngModel)]="conpassword"  placeholder="Confirm password" required></ion-input>\n\n              </ion-col>\n\n              </ion-row> -->\n\n    <!-- <br><br><br> -->\n\n    \n\n \n\n\n\n    <ion-row style="margin-top: 10%">\n\n        <ion-col >\n\n          <button ion-button  class="button" [disabled]="loginForm.invalid" (click)="login(signInModel)" >Login</button>\n\n        </ion-col>\n\n        </ion-row>\n\n</form>\n\n       \n\n</ion-content>\n\n<ion-footer  no-border>\n\n  <ion-row>\n\n    <ion-col>\n\n        <h1 class="logotext"> <img style="height: 20px" src="assets/imgs/icon.png"> LAO</h1>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-footer>\n\n'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_cognito_service_cognito_service__["a" /* CognitoServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__Datahandler_datahandler__["a" /* DataHandler */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=18.js.map