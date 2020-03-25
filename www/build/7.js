webpackJsonp([7],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_toast__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, provider, storage, loader, events, Toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.storage = storage;
        this.loader = loader;
        this.events = events;
        this.Toast = Toast;
        this.storage.set('selectedLanguages', { code: 'en' });
    }
    // commenting for temporary fix
    // login(){
    //   this.navCtrl.setRoot('TabPage')
    // }
    //modified code - Mythreyi - add api and add go to register page flow
    SignupPage.prototype.login = function () {
        var _this = this;
        var data = {
            "email": this.Username,
            "password": this.password,
        };
        this.provider.authenticate_retailers(data).then(function (response) {
            console.log(response, "111111111111");
            _this.loader.show();
            if (response['code'] == 200) {
                _this.storage.set('displayDatas', response);
                _this.storage.set('mobile', _this.Username);
                //      this.events.publish('mobile', this.Username);
                //this.events.publish('retailerDetails','hello')
                _this.Toast.show('Login successfully');
                _this.navCtrl.setRoot('TabPage');
                _this.loader.hide();
                //     this.storage.set('userData', data);
                //   this.events.publish('userData', data);
            }
            else {
                _this.Toast.show('User does not exist');
                _this.loader.hide();
            }
        });
    };
    SignupPage.prototype.gotoRegister = function () {
        this.navCtrl.push('RegistrationPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/pages/signup/signup.html"*/'<ion-content>\n\n\n\n  <!-- before adding validation -->\n\n  <!-- <ion-row>\n\n        <ion-col col-12>\n\n            <img class="logo" src=\'../../assets/imgs/icon.png\'>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="p-l-4">\n\n          <ion-col col-12 class="col-static">\n\n            <ion-input class="input-cover" type="tel" pattern="[5-9]{1}[0-9]{9}"  minlength="10" maxlength="10" [(ngModel)]="Username"  placeholder="Username / Mobile No"   required></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="p-l-4">\n\n            <ion-col col-12 class="col-static">\n\n                <ion-input class="input-cover" type="password" [(ngModel)]="password"  placeholder="Password"  required></ion-input>\n\n            </ion-col>\n\n          </ion-row> -->\n\n\n\n  <!-- After adding validation - Mythreyi -->\n\n\n\n  <form #signup="ngForm">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <img class="logo" src=\'assets/imgs/icon.png\'>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="p-l-4">\n\n      <ion-col col-12 class="col-static">\n\n        <ion-input class="input-cover" type="tel" name="mobile" #mobile="ngModel" npattern="[5-9]{1}[0-9]{9}"\n\n          minlength="10" maxlength="10" [(ngModel)]="Username" placeholder="Username / Mobile No" required></ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="p-l-4">\n\n      <ion-col col-12 class="col-static">\n\n        <ion-input class="input-cover" type="password" name="Pssword" #Pssword="ngModel" [(ngModel)]="password"\n\n          placeholder="Password" required>\n\n        </ion-input>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <button ion-button full clear text-uppercase (click)="gotoRegister()">Don\'t have account ? Register now</button>\n\n  <!-- <ion-row style="margin-top: 20%">\n\n            <ion-col >\n\n              <button ion-button round class="button" (click)="login()" >Submit</button>\n\n            </ion-col>\n\n            </ion-row> -->\n\n</ion-content>\n\n<ion-footer no-border>\n\n  <button ion-button full text-uppercase class="button" [disabled]="signup.invalid" (click)="login()">Submit</button>\n\n</ion-footer>'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_services_loader__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_services_toast__["a" /* ToastProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=7.js.map