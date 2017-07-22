webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-contact',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, af) {
        this.navCtrl = navCtrl;
        this.af = af;
        this.myDate = new Date().toISOString();
        this.firelist = af.list('/chat', {
            query: {
                orderByChild: "negativtimestamp"
            }
        });
    }
    HomePage.prototype.chatSend = function (va, vi) {
        this.af.list('/chat').push({
            uid: window.localStorage.getItem('uid'),
            username: window.localStorage.getItem('displayName'),
            img: window.localStorage.getItem('photoUrl'),
            chat_text: va.chatText,
            timestamp: Date.now(),
            negativtimestamp: -Date.now()
        });
        // console.log( Date.UTC())
        this.chat = '';
    };
    HomePage.prototype.logout = function () {
        window.localStorage.removeItem('uid');
        window.localStorage.removeItem('displayName');
        window.localStorage.removeItem('photoUrl');
    };
    return HomePage;
}());
HomePage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end> \n      <button ion-button clear (click)="onAddFriend"><ion-icon name="add"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n   <ion-item *ngFor="let item of firelist |async">\n  \n     <ion-avatar>\n       <img src="assets/img/index.png"/>\n     </ion-avatar>\n \n     <h2 class="chat-username">{{item.username}}</h2>\n     <p class="chat-text">{{item.chat_text}}</p>\n     <h1 class="chat-time">{{item.timestamp}}</h1>\n       <!--<ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" >\n         {{item.timestamp}}\n       </ion-datetime>-->\n   </ion-item>\n    \n </ion-list> \n  \n</ion-content>\n<ion-footer>\n  <form #f="ngForm">\n    <ion-grid>\n      <ion-row>\n        <ion-col width-80>\n          <ion-input [(ngModel)]="chat" name="chatText" required placeholder="pesan..."></ion-input>\n        </ion-col>\n        <ion-col>\n          <button ion-button  (click)="chatSend(f.value,f.valid)" [disabled]="f.valid===false">Send</button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-footer>\n          \n'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = RegisterPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"/home/disha/app/Vchat123/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/disha/app/Vchat123/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_apiservice__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(95);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var config = {
    apiKey: "AIzaSyAOLpLp9iVgw4wmfuiSAsBRBqxs_-12UZA",
    authDomain: "library-ab926.firebaseapp.com",
    databaseURL: "https://library-ab926.firebaseio.com",
    projectId: "library-ab926",
    storageBucket: "library-ab926.appspot.com",
    messagingSenderId: "898518520739"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */]({
        declarations: [
            MyApp,
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(MyApp, {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            MyApp,
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["a" /* AngularFireAuth */],
            { provide: app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_apiservice__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabase */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(107);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiServiceProvider = (function () {
    function ApiServiceProvider(afAuth, http) {
        var _this = this;
        this.afAuth = afAuth;
        this.http = http;
        this.baseUrl = "http://13.126.89.140:8080/api";
        afAuth.authState.subscribe(function (user) { return _this.currentUser = user; });
    }
    //       register(user){
    //     let headers = new Headers();
    //       headers.append('Content-Type', 'application/json');
    //  return this.http.post('http://13.126.89.140:8080/api/register', user, {headers: headers})
    //         .map(res => {
    //           // this.todoService.init(res.json());
    //         //   console.log(res.json());
    //         }, (err) => {
    //         //   console.log(err);
    //         }); 
    //       }
    ApiServiceProvider.prototype.register = function (inputs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log('111', inputs);
        //   let user_credential = {
        //     user:{
        //  mobile:inputs.number
        //     }
        //   };
        //    console.log('2222',JSON.stringify(user_credential));
        return this.http.post(this.baseUrl + '/register', inputs, { headers: headers });
        // .map(res => res.json())
    };
    ApiServiceProvider.prototype.login123 = function (inputs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var user = {
            username: inputs.username,
            password: inputs.password
        };
        console.log('121212', user);
        return this.http.post(this.baseUrl + '/login', user, { headers: headers });
        // .map(res => res.json());
    };
    return ApiServiceProvider;
}());
ApiServiceProvider = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], ApiServiceProvider);

//# sourceMappingURL=apiservice.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apiservice__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(98);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, http, apiService) {
        this.nav = nav;
        this.http = http;
        this.apiService = apiService;
        this.token = window.localStorage.getItem('token');
        this.username = JSON.parse(window.localStorage.getItem('mobile_no'));
        console.log('mob no', this.username);
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log(user);
        this.apiService.login123(user)
            .subscribe(function (res) {
            window.localStorage.setItem('login_token', JSON.stringify(res));
            console.log(res.json());
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-login',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/login/login.html"*/'<ion-header>\n \n  <ion-navbar color="secondary">\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n \n</ion-header>\n \n \n<ion-content padding>\n \n  <ion-row class="account-form">\n    <ion-col>\n      <ion-list inset>\n \n        <!--<ion-item>\n          <ion-label><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="name" placeholder="Name" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="username" placeholder="Username" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="email" placeholder="Email" type="email"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n        </ion-item>-->\n\n        <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="username" placeholder="Mob. Number " type="number"></ion-input>\n        </ion-item>\n    <ion-item >\n          <!--<ion-label><ion-icon name="person"></ion-icon></ion-label>-->\n          <ion-label>Please Enter the OTP Recieved</ion-label>\n          <ion-input [(ngModel)]="password"  type="text"></ion-input>\n        </ion-item>\n<!--\n          <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="displayName" placeholder="Name " type="text"></ion-input>\n        </ion-item>-->\n\n      </ion-list>\n \n      <button ion-button (click)="login()" class="continue-button">Login</button>\n \n    </ion-col>\n  </ion-row>\n \n</ion-content>'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_apiservice__["a" /* ApiServiceProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apiservice__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(52);
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
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = RegisterPage_1 = (function () {
    function RegisterPage(nav, apiService, http, loadingCtrl) {
        this.nav = nav;
        this.apiService = apiService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.wantOtp = false;
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.wantOtp = true;
        var credentials = {
            // email: this.email,
            // password: this.password
            mobile: this.number
        };
        this.apiService.register(credentials)
            .subscribe(function (res) {
            loader.dismiss();
            window.localStorage.setItem('token', JSON.stringify(res));
            window.localStorage.setItem('mobile_no', JSON.stringify(_this.number));
            console.log('token', res.json());
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.launchSignup = function () {
        this.nav.push(RegisterPage_1);
    };
    return RegisterPage;
}());
RegisterPage = RegisterPage_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-register',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/register/register.html"*/'\n\n\n\n\n\n<ion-content padding>\n \n  <ion-row class="login-logo">\n    <ion-col><img src="http://placehold.it/100x100" /></ion-col>\n  </ion-row>\n \n  <ion-row class="login-form">\n    <ion-col>\n      <ion-list inset>\n \n        <!--<ion-item>\n          <ion-label><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="email" placeholder="Email" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="password" placeholder="password" type="password"></ion-input>\n        </ion-item>-->\n \n \n     <ion-item>\n          <ion-label><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="number" placeholder="Mobile Number" type="number"></ion-input>\n        </ion-item>\n   <!--<ion-item *ngIf="wantOtp">\n           \n          <ion-label>Please Enter the OTP Recieved</ion-label>\n          <ion-input [(ngModel)]="otp"  type="number"></ion-input>\n        </ion-item>-->\n      </ion-list>\n\n\n      <button ion-button (click)="register()" primary class="login-button">Register</button>\n \n    </ion-col>\n  </ion-row>\n \n    <!--<ion-row>\n      <ion-col>\n        <button (click)="launchSignup()" class="create-account">Create an Account</button>\n      </ion-col>\n  </ion-row>-->\n \n</ion-content>'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_apiservice__["a" /* ApiServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], RegisterPage);

var RegisterPage_1;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 63;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		382,
		1
	],
	"../pages/register/register.module": [
		383,
		0
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 67;

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-about',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

},[106]);
//# sourceMappingURL=main.js.map