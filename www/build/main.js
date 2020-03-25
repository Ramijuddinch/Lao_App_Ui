webpackJsonp([20],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataHandler = /** @class */ (function () {
    function DataHandler(events, storage, http) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.http = http;
        //variable declaration
        this.now = new Date();
        this.HAS_LOGGED_IN = "hasLoggedIn";
        setInterval(function () {
            _this.date = new Date();
        }, 1);
    }
    DataHandler.prototype.getLanguagecode = function () {
        return this.storage.get("lang").then(function (code) {
            var value;
            if (code != null) {
                value = code['languagecode'];
            }
            else {
                value = "en";
            }
            return value;
        });
    };
    DataHandler.prototype.login = function (mobileNumber) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setmobileNumber(mobileNumber);
        this.events.publish("user:login");
    };
    DataHandler.prototype.setmobileNumber = function (mobileNumber) {
        this.storage.set("mobile", mobileNumber);
    };
    DataHandler.prototype.getmobileNumber = function () {
        return this.storage.get("mobile").then(function (value) {
            return value;
        });
    };
    DataHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], DataHandler);
    return DataHandler;
}());

//# sourceMappingURL=datahandler.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
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


var LoaderService = /** @class */ (function () {
    function LoaderService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoaderService.prototype.show = function (timeout) {
        if (!this.loading) {
            var options = {
                spinner: 'hide',
                cssClass: 'Loader',
                content: "\n        <img src=\"assets/icon/loder.svg\" class=\"spinner\">\n        ",
                showBackdrop: false
            };
            this.loading = this.loadingCtrl.create(options);
            if (timeout) {
                this.loading.setDuration(timeout);
            }
            this.loading.present();
        }
    };
    LoaderService.prototype.hide = function () {
        var _this = this;
        if (this.loading) {
            this.loading.dismiss().then(function () { _this.loading = null; });
        }
    };
    LoaderService.prototype.getLoader = function () {
        return this.loading;
    };
    LoaderService.prototype.clearLoader = function () {
        this.loading = null;
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoaderService);
    return LoaderService;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		319,
		19
	],
	"../pages/login/login.module": [
		320,
		18
	],
	"../pages/mycart/mycart.module": [
		321,
		17
	],
	"../pages/myorder/myorder.module": [
		322,
		16
	],
	"../pages/notifications/notifications.module": [
		323,
		15
	],
	"../pages/offer/offer.module": [
		324,
		14
	],
	"../pages/order-details/order-details.module": [
		325,
		13
	],
	"../pages/ordersummery/ordersummery.module": [
		326,
		0
	],
	"../pages/otp/otp.module": [
		327,
		12
	],
	"../pages/product/product.module": [
		328,
		11
	],
	"../pages/productdetails/productdetails.module": [
		329,
		10
	],
	"../pages/quickcart/quickcart.module": [
		333,
		9
	],
	"../pages/registration/registration.module": [
		330,
		1
	],
	"../pages/search/search.module": [
		331,
		8
	],
	"../pages/signup/signup.module": [
		332,
		7
	],
	"../pages/tab/tab.module": [
		334,
		6
	],
	"../pages/thankyou/thankyou.module": [
		335,
		5
	],
	"../pages/userdetails/userdetails.module": [
		336,
		4
	],
	"../pages/usersetting/usersetting.module": [
		337,
		3
	],
	"../pages/wholseller/wholseller.module": [
		338,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalMethods; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalMethods = /** @class */ (function () {
    // url: any;
    function GlobalMethods(_http, loader, event, alert) {
        this._http = _http;
        this.loader = loader;
        this.event = event;
        this.alert = alert;
    }
    GlobalMethods.prototype.ProcessPutRequest = function (url, params) {
        // let token = localStorage.getItem('_Token');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        });
        var returnValue = this.Put(url, params, options);
        return returnValue;
    };
    GlobalMethods.prototype.ProcessPostRequest = function (url, params) {
        console.log(url);
        // let token = localStorage.getItem('_Token');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            })
        });
        var returnValue = this.Post(url, params, options);
        return returnValue;
    };
    GlobalMethods.prototype.ProcessGetRequest = function (url) {
        // let token = localStorage.getItem('_Token');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            })
        });
        return this.Get(url, options);
    };
    GlobalMethods.prototype.Post = function (url, params, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post(url, params, options)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (error) {
                _this.loader.hide();
                if (error.status == 401) {
                    // this.UnAuthorize();
                }
                console.log(error);
                reject(error);
            });
        });
    };
    GlobalMethods.prototype.Put = function (url, params, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.put(url, params, options)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (error) {
                _this.loader.hide();
                if (error.status == 401) {
                    // this.UnAuthorize();
                }
                console.log(error);
                reject(error);
            });
        });
    };
    GlobalMethods.prototype.Get = function (url, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(url, options)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (error) {
                _this.loader.hide();
                if (error.status == 401) {
                    // this.UnAuthorize();
                }
                console.log(error);
                reject(error);
            });
        });
    };
    GlobalMethods = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__loader__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]])
    ], GlobalMethods);
    return GlobalMethods;
}());

//# sourceMappingURL=globalMethods.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleBackbuttonPage; });
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


// import { AlertService } from '../service/alert_service';
var HandleBackbuttonPage = /** @class */ (function () {
    function HandleBackbuttonPage(_platform, alertCtrl, toastCtrl, 
        // public _alert: AlertService,
        events) {
        this._platform = _platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.lastTimeBackPress = 0;
    }
    HandleBackbuttonPage.prototype.HandleBackBtn = function () {
        var timePeriodToExit = 3000;
        if (new Date().getTime() - this.lastTimeBackPress < timePeriodToExit) {
            this._platform.exitApp(); //Exit from app
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Press back again to exit.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.lastTimeBackPress = new Date().getTime();
        }
    };
    HandleBackbuttonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HandleBackbuttonPage);
    return HandleBackbuttonPage;
}());

//# sourceMappingURL=HandleBackbutton.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
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


var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.options = {
            position: 'top',
            duration: 1000,
        };
        this.duration = 1000;
    }
    ToastProvider.prototype.show = function (message) {
        var _this = this;
        if (!this.toast) {
            var options = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.present();
            this.toast.onDidDismiss(function () {
                _this.toast = null;
            });
        }
    };
    ToastProvider.prototype.showConnectionToast = function (message) {
        var _this = this;
        if (!this.toast) {
            var options = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.present();
            this.toast.onDidDismiss(function () {
                _this.toast = null;
            });
        }
    };
    ToastProvider.prototype.showWithDuration = function (message, duration) {
        var _this = this;
        if (!this.toast) {
            var options = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.setDuration(duration);
            this.toast.present();
            this.toast.onDidDismiss(function () {
                _this.toast = null;
            });
        }
    };
    ToastProvider.prototype.showWithButton = function (message, text) {
        if (!this.toast) {
            var options = this.options;
            options.closeButtonText = text;
            options.showCloseButton = true;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.present();
        }
    };
    ToastProvider.prototype.showError = function (code) {
        var _this = this;
        if (!this.toast) {
            var options = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setDuration(this.duration);
            this.toast.present();
            this.toast.onDidDismiss(function () {
                _this.toast = null;
            });
        }
    };
    ToastProvider.prototype.hide = function () {
        if (this.toast) {
            this.toast.dismiss();
        }
    };
    ToastProvider.prototype.getToast = function () {
        return this.toast;
    };
    ToastProvider.prototype.clearToast = function () {
        this.toast = null;
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
        //this is a global variable
        this.viewcart = [];
        this.WholesalerAddress = [];
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_amazon_cognito_identity_js__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CognitoServiceProvider = /** @class */ (function () {
    function CognitoServiceProvider(http) {
        this.http = http;
        this._POOL_DATA = {
            UserPoolId: "us-east-2_aSvEj9Cz9",
            ClientId: "1d5mjvco21ih2gktutcafghfj3"
        };
        console.log('Hello CognitoServiceProvider Provider');
    }
    // signUp(userData) {
    CognitoServiceProvider.prototype.signUp = function (userData) {
        var _this = this;
        console.log(userData, 'cognito services');
        return new Promise(function (resolved, reject) {
            var userPoolData = new __WEBPACK_IMPORTED_MODULE_2_amazon_cognito_identity_js__["c" /* CognitoUserPool */](_this._POOL_DATA);
            var userAttribute = [];
            userAttribute.push(new __WEBPACK_IMPORTED_MODULE_2_amazon_cognito_identity_js__["b" /* CognitoUserAttribute */]({
                Name: "username",
                Value: userData.mobileNo
            }));
            userPoolData.signUp(userData.mobileNo, userData.Password, userAttribute, null, function (err, result) {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                else {
                    resolved(result);
                    console.log(result);
                }
            });
        });
    };
    CognitoServiceProvider.prototype.confirmUser = function (verificationCode, mobile) {
        var _this = this;
        console.log(verificationCode, mobile, 'cognito');
        return new Promise(function (resolved, reject) {
            var userPoolData = new __WEBPACK_IMPORTED_MODULE_2_amazon_cognito_identity_js__["c" /* CognitoUserPool */](_this._POOL_DATA);
            var cognitoUser = new __WEBPACK_IMPORTED_MODULE_2_amazon_cognito_identity_js__["a" /* CognitoUser */]({
                Username: mobile,
                Pool: userPoolData
            });
            cognitoUser.confirmRegistration(verificationCode, true, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolved(result);
                }
            });
        });
    };
    CognitoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CognitoServiceProvider);
    return CognitoServiceProvider;
}());

// }
//# sourceMappingURL=cognito-service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_services_alert_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_services_HandleBackbutton__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_services_toast__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_services_loader__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_cognito_service_cognito_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_services_globalMethods__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Datahandler_datahandler__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_services_global__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_ngx__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsPlacement: "top",
                    tabsHideOnSubPages: true,
                    platforms: {
                        android: {
                            scrollAssist: false,
                            autoFocusAssist: false
                        },
                        ios: {
                            scrollAssist: false,
                            autoFocusAssist: false
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mycart/mycart.module#MycartPageModule', name: 'MycartPage', segment: 'mycart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myorder/myorder.module#MyorderPageModule', name: 'MyorderPage', segment: 'myorder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer/offer.module#OfferPageModule', name: 'OfferPage', segment: 'offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordersummery/ordersummery.module#OrdersummeryPageModule', name: 'OrdersummeryPage', segment: 'ordersummery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdetails/productdetails.module#ProductdetailsPageModule', name: 'ProductdetailsPage', segment: 'productdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quickcart/quickcart.module#QuickcartPageModule', name: 'QuickcartPage', segment: 'quickcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab/tab.module#TabPageModule', name: 'TabPage', segment: 'tabs', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userdetails/userdetails.module#UserdetailsPageModule', name: 'UserdetailsPage', segment: 'userdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usersetting/usersetting.module#UsersettingPageModule', name: 'UsersettingPage', segment: 'usersetting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wholseller/wholseller.module#WholsellerPageModule', name: 'WholsellerPage', segment: 'wholseller', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__providers_services_HandleBackbutton__["a" /* HandleBackbuttonPage */],
                __WEBPACK_IMPORTED_MODULE_9__providers_services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_8__providers_services_services__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_services_loader__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_services_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_14__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_services_services__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_services_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_16__providers_services_globalMethods__["a" /* GlobalMethods */],
                __WEBPACK_IMPORTED_MODULE_17__Datahandler_datahandler__["a" /* DataHandler */],
                __WEBPACK_IMPORTED_MODULE_15__providers_cognito_service_cognito_service__["a" /* CognitoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_services_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_ngx__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export App_Ip */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrl; });
var App_Ip = {
    IP: 'http://3.12.144.160'
};
var ApiUrl = {
    Autheticate_Retailer: App_Ip.IP + '/retailerlogin',
    Get_All_Languages: App_Ip.IP + '/getalllanguanges',
    Get_All_Wholesalers: App_Ip.IP + '/getallwholesalers',
    Get_All_Categories: App_Ip.IP + '/getallcategories',
    Get_All_Categories_By_ID: App_Ip.IP + '/getallcategories',
    Get_All_Products: App_Ip.IP + '/getallproducts',
    Get_All_Order: App_Ip.IP + '/getmyorders',
    Add_to_Cart: App_Ip.IP + '/addtocart',
    Insert_Retailer: App_Ip.IP + '/saveretailer',
    Edit_Retailer: App_Ip.IP + '/editretailer',
    View_Cart: App_Ip.IP + '/viewcart',
    Remove_Cart: App_Ip.IP + '/removecart',
    Place_Order: App_Ip.IP + '/createorder',
    Quick_Cart: App_Ip.IP + '/quickcart',
    Get_MyOrder: App_Ip.IP + '/getmyorders',
    Guick_All_products: App_Ip.IP + '/quickallproducts'
};
//# sourceMappingURL=apiUrl.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_services__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Datahandler_datahandler__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navCtrl, events, dataHandler, serviceHandler, menu, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.dataHandler = dataHandler;
        this.serviceHandler = serviceHandler;
        this.menu = menu;
        this.navParams = navParams;
        this.showLogo = true;
        this.events.subscribe('productCount:addCount', function (productLength, addCount) {
            if (addCount == true) {
                _this.productLength = productLength;
            }
        });
        this.dataHandler.storage.get("mobile").then(function (mobile) {
            _this.mobile = mobile;
            _this.viewCart();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.navCtrl.getActive().id == 'MycartPage') {
            this.showLogo = false;
        }
    };
    HeaderComponent.prototype.onOpenMenu = function () {
        this.menu.open();
    };
    HeaderComponent.prototype.OpenNotification = function () {
        this.navCtrl.push('NotificationsPage');
    };
    HeaderComponent.prototype.OpenViewDetail = function () {
        this.navCtrl.push('UserdetailsPage');
    };
    HeaderComponent.prototype.cart = function () {
        this.navCtrl.push('MycartPage');
    };
    HeaderComponent.prototype.setFilteredCategory = function () {
        this.navCtrl.push('SearchPage');
    };
    HeaderComponent.prototype.viewCart = function () {
        var _this = this;
        this.serviceHandler.View_Cart(this.mobile).then(function (value) {
            if (value['code'] == 200) {
                _this.productLength = value['message'].length;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('withlogo'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "withlogo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('titleHeader'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "titleHeader", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/components/header/header.html"*/'<ion-header no-border *ngIf=\'withlogo; else WithBack\'>\n\n    <ion-navbar hideBackButton>\n\n        <ion-buttons left icon-only class="bgimgmenuwidth">\n\n            <button icon-only menuToggle class="bgimgmenuwidth" (click)="onOpenMenu()">\n\n                <img class="bgimgmenu" src="assets/icon/menu.svg" alt="">\n\n            </button>\n\n          \n\n        </ion-buttons>\n\n        <ion-title > <img class="logo" src="assets/imgs/icon.png" /> </ion-title>\n\n        <ion-buttons right>\n\n            <button  ion-button icon-only (click)="cart()">\n\n                    <ion-icon class="cartIcon" name="cart"></ion-icon>\n\n                    <ion-badge class="cart-badge" *ngIf="productLength != 0">{{productLength}}</ion-badge>\n\n                    <ion-badge class="cart-badge" *ngIf="productLength == 0"></ion-badge>\n\n            </button>\n\n            <button class="cartIcon"  ion-button icon-only (click)="OpenNotification()">\n\n                <ion-icon name="notifications"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n</ion-navbar>\n\n\n\n      <!-- <ion-searchbar [(ngModel)]="searchItem" animated="true" (click)="setFilteredCategory()" placeholder="Search"\n\n      autocorrect="on" spellcheck="true">\n\n      <ion-icon name="close"></ion-icon>\n\n      </ion-searchbar> -->\n\n</ion-header>\n\n\n\n<ng-template #WithBack>\n\n    <ion-header no-border >\n\n        <ion-navbar>\n\n            <ion-title>{{titleHeader}}</ion-title>\n\n            <ion-buttons right *ngIf="showLogo">\n\n                <button  ion-button icon-only (click)="cart()">\n\n                        <ion-icon style="color: #fff" name="cart"></ion-icon>\n\n                        <ion-badge class="cart-badge" *ngIf="productLength != 0">{{productLength}}</ion-badge>\n\n                        <ion-badge class="cart-badge" *ngIf="productLength == 0"></ion-badge>\n\n                </button>\n\n              </ion-buttons>\n\n          </ion-navbar>\n\n    </ion-header>\n\n</ng-template>\n\n\n\n'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_3__Datahandler_datahandler__["a" /* DataHandler */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_alert_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_HandleBackbutton__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_services_services__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, events, storage, serviceHandler, statusBar, _alert, handleBackbuttonPage, alertCtrl, app, _app, splashScreen, menu) {
        // this.userid  = this.navParams.get("userID");
        var _this = this;
        this.platform = platform;
        this.events = events;
        this.storage = storage;
        this.serviceHandler = serviceHandler;
        this.statusBar = statusBar;
        this._alert = _alert;
        this.handleBackbuttonPage = handleBackbuttonPage;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this._app = _app;
        this.splashScreen = splashScreen;
        this.menu = menu;
        this.storage.get("displayDatas").then(function (displayDatas) {
            _this.mobile = displayDatas.message[0].mobile;
            _this.username = displayDatas.message[0].name;
        });
        // this.events.subscribe("userData", userData => {
        //   console.log("userdata",userData)
        //   this.userData = userData;
        // });
        this.storage.get("userData").then(function (userData) {
            if (!userData) {
                //commenting - Mythreyi - as per Rajesh's mail on registration flow
                // this.navCtrl.push('LoginPage');
                //changing to signup.ts navigation
                _this.navCtrl.push('SignupPage');
            }
            else {
                _this.navCtrl.push('TabPage');
            }
        });
        this.initializeApp();
        // this.serviceHandler.Get_All_Categories(this.mobile);
        this.pages = [
            { title: 'Home', component: 'TabPage', icon: 'assets/icon/home.svg' },
            { title: 'Quick Cart', component: 'QuickcartPage', icon: "assets/icon/mycart.svg" },
            { title: 'My Orders', component: 'MyorderPage', icon: "assets/icon/myorder.svg" },
            { title: 'Notifications', component: 'NotificationsPage', icon: "assets/icon/notification.svg" },
        ];
        platform.ready().then(function () {
            //Handling device back button globally
            platform.registerBackButtonAction(function () {
                if (_this._alert.getAlert()) {
                    _this._alert.closeAlert();
                }
                else {
                    var nav = _this._app.getActiveNav();
                    var activeView = nav.getActive();
                    if (typeof activeView.instance.backButtonAction === 'function')
                        activeView.instance.backButtonAction();
                    else {
                        if (nav.canGoBack()) {
                            nav.pop();
                        }
                        else {
                            if (_this.navCtrl.canGoBack()) {
                                _this.navCtrl.pop();
                            }
                            else {
                                if (nav.getType() != 'nav') {
                                    activeView.dismiss();
                                }
                                if (nav.getType() == 'tab' || nav.getType() == 'nav') {
                                    _this.handleBackbuttonPage.HandleBackBtn();
                                }
                            }
                        }
                    }
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    Object.defineProperty(MyApp.prototype, "navCtrl", {
        // menu: any;
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
    ;
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    // viewDetails(){
    //   // this.menu.open();
    //   this.navCtrl.push('UserdetailsPage');
    // }
    MyApp.prototype.veiwDetails = function () {
        // this.menu.open();
        console.log(this.userData, '444444444444444444');
        //  console.log(this.userData.message.name,'555555555555')
        this.navCtrl.push('UserdetailsPage');
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.alertCtrl.showConfirm("log out", "Are you sure you want to logout?", "cancel", "log out").then(function (confirm) {
            if (confirm) {
                _this.storage.clear();
                _this.storage.remove('username');
                _this.storage.remove('mobile');
                _this.storage.remove('registrationModel');
                //added these below for correct navigation-Mythreyi
                // this.storage.remove('registrationModel.name');
                _this.storage.remove('userData');
                _this.storage.remove('userData.mobile');
                _this.storage.remove('user_id');
                // this.storage.remove('username');
                // this.storage.remove('displayDatas');
                // this.storage.remove('displayDatas.message[0].mobile;');
                // end- Mythreyi
                _this.navCtrl.setRoot('SignupPage');
                _this.navCtrl.setRoot('SignupPage');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/lenovo/CINTANA/LAO/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n\n  <ion-header>\n\n    <!-- <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar> -->\n\n    <ion-row class="rowBg">\n\n        <ion-item class="profile-details">\n\n          <ion-thumbnail item-start class="profile-img-rs">\n\n            <img src="assets/imgs/man3.png">\n\n          </ion-thumbnail>\n\n\n\n          <h3 class="f-w-500 usernamee"></h3>\n\n          <h3 class="f-w-500 usernamee">{{username}}</h3>\n\n          <!-- <h3 class="f-w-500 usernamee">{{username}}</h3>6 -->\n\n          \n\n            <h2 style="color: white;" (click)="veiwDetails()" menuClose>View details </h2>\n\n            <!-- <h2 style="color: white;" (click)="editDetails()">Edit details</h2> -->\n\n\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <!-- <ion-list style="margin-top: 0%">\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <img  class=\'iconImage\' ><p>{{p.title}}</p>\n\n      </button>\n\n      <li class="menuText" menuClose  (click)="logout()">\n\n            \n\n          <img class="callimg" src="../../assets/icon/callnow.svg"> <span class="">Logout</span>\n\n          <br>\n\n        </li>\n\n    </ion-list> -->\n\n    <ion-list>\n\n        <ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)" (click)="openPage(p)">\n\n          <ion-avatar item-start>\n\n            <img src="{{p.icon}}">\n\n          </ion-avatar>\n\n          <h2 menuClose>{{p.title}}</h2>\n\n        </ion-item>\n\n        <ion-item menuClose (click)="logout()" >\n\n            <ion-avatar item-start>\n\n              <img src="assets/icon/logout.svg">\n\n            </ion-avatar>\n\n            <h2 menuClose>Logout</h2>\n\n          </ion-item>\n\n        <!-- <li class="menuText" menuClose  (click)="logout()">\n\n            <img class="callimg" src="../../assets/icon/logout.svg"> <h2 class="">Logout</h2>\n\n            <br>\n\n          </li> -->\n\n        </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/lenovo/CINTANA/LAO/src/app/app.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_services_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__providers_services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_6__providers_services_HandleBackbutton__["a" /* HandleBackbuttonPage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiUrl__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalMethods__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesProvider = /** @class */ (function () {
    // url: any = '';
    function ServicesProvider(http, globalMethods) {
        this.http = http;
        this.globalMethods = globalMethods;
    }
    ServicesProvider.prototype.Add_Retailers = function (data) {
        return this.globalMethods.ProcessPostRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Insert_Retailer, data);
    };
    // public Get_Billing_Details(){
    //   return this.globalMethods.ProcessGetRequest(ApiUrl.Get_Bill);
    // }
    ServicesProvider.prototype.EDIT_Retailers = function (data) {
        return this.globalMethods.ProcessPostRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Edit_Retailer, data);
    };
    //added by mythreyi 
    ServicesProvider.prototype.authenticate_retailers = function (data) {
        return this.globalMethods.ProcessPostRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Autheticate_Retailer, data);
    };
    ServicesProvider.prototype.Get_All_Languanges = function () {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Get_All_Languages);
    };
    ServicesProvider.prototype.Get_All_Wholesalers = function () {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Get_All_Wholesalers);
    };
    ServicesProvider.prototype.Get_All_Categories = function (mobile) {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Get_All_Categories + "?mobile=" + mobile);
    };
    ServicesProvider.prototype.Add_To_Cart = function (data) {
        return this.globalMethods.ProcessPostRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Add_to_Cart, data);
    };
    ServicesProvider.prototype.Get_All_Products = function (catId, pageno, langCode, mobile) {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Get_All_Products + "?category=" + catId + "&page=" + pageno + "&languange=" + langCode + "&mobile=" + mobile);
    };
    ServicesProvider.prototype.View_Cart = function (mobile) {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].View_Cart + "?mobile=" + mobile);
    };
    ServicesProvider.prototype.Remove_Cart = function (id) {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Remove_Cart + "?id=" + id);
    };
    ServicesProvider.prototype.Place_Order = function (data) {
        return this.globalMethods.ProcessPostRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Place_Order, data);
    };
    ServicesProvider.prototype.Get_All_Order = function (id) {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Get_All_Order + "?wholesalerid=" + id);
    };
    ServicesProvider.prototype.Get_My_Order = function (mobile) {
        //changed to wholesalerid as it was passing wrong - Mythreyi
        // return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Order+"?mobile="+mobile);
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Get_All_Order + "?wholesalerid=" + mobile);
    };
    ServicesProvider.prototype.Quick_Cart = function (proname, pageno, langCode, mobile) {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Quick_Cart + "?productname=" + proname + '&page=' + pageno + '&languange=' + langCode + '&mobile=' + mobile);
    };
    ServicesProvider.prototype.Guick_All_products = function (pageno, langCode, mobile) {
        return this.globalMethods.ProcessGetRequest(__WEBPACK_IMPORTED_MODULE_2__apiUrl__["a" /* ApiUrl */].Guick_All_products + '?page=' + pageno + '&languange=' + langCode + '&mobile=' + mobile);
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__globalMethods__["a" /* GlobalMethods */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
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


var AlertService = /** @class */ (function () {
    function AlertService(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.isDDL = false;
    }
    AlertService.prototype.showAlert = function (title, subTitle, button) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.alert) {
                _this.alert = _this.alertCtrl.create({
                    title: title,
                    subTitle: subTitle,
                    buttons: [{
                            text: button,
                            role: 'cancel',
                            handler: function () {
                                resolve();
                                _this.alert = null;
                            }
                        }]
                });
                _this.alert.present();
            }
        });
    };
    AlertService.prototype.showConfirm = function (title, subTitle, cancelButton, okButton) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.alert) {
                _this.alert = _this.alertCtrl.create({
                    title: title,
                    subTitle: subTitle,
                    buttons: [
                        {
                            text: cancelButton,
                            role: 'cancel',
                            handler: function () {
                                resolve(false);
                                _this.alert = null;
                            },
                        },
                        {
                            text: okButton,
                            handler: function () {
                                resolve(true);
                                _this.alert = null;
                            },
                        }
                    ]
                });
                _this.alert.present();
            }
        });
    };
    AlertService.prototype.Dismiss = function () {
        var _this = this;
        if (this.alert) {
            this.alert.dismiss().then(function () { _this.alert = null; });
        }
    };
    AlertService.prototype.closeAlert = function () {
        if (this.alert) {
            this.alert.dismiss();
            this.alert = null;
        }
    };
    AlertService.prototype.getAlert = function () {
        return this.alert;
    };
    AlertService.prototype._setMessage = function (msg) {
        this.alert.setMessage(msg);
    };
    AlertService.prototype.getElement = function () {
        return this.element;
    };
    AlertService.prototype.setElement = function (element, isDDL) {
        this.element = element;
        this.isDDL = isDDL;
        // alert(this.isDDL)
    };
    AlertService.prototype.clearElement = function () {
        this.element = null;
        this.isDDL = false;
        // alert('clrea'+this.isDDL)
    };
    AlertService.prototype.dismissElement = function () {
        if (this.element) {
            // alert(this.isDDL)
            this.isDDL ? this.element.close() : this.element.dismiss();
            this.clearElement();
        }
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert_service.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map