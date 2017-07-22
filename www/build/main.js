webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(55);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__changepassword_changepassword__["a" /* ChangepasswordPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Me" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(43);
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
    // rootPage:any = TabsPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__ = __webpack_require__(107);
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, af, contacts) {
        this.navCtrl = navCtrl;
        this.af = af;
        this.contacts = contacts;
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
HomePage = home___decorate([
    home___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end> \n      <button ion-button clear (click)="onAddFriend"><ion-icon name="add"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n   <ion-item *ngFor="let item of firelist |async">\n  \n     <ion-avatar>\n       <img src="assets/img/index.png"/>\n     </ion-avatar>\n \n     <h2 class="chat-username">{{item.username}}</h2>\n     <p class="chat-text">{{item.chat_text}}</p>\n     <h1 class="chat-time">{{item.timestamp}}</h1>\n       <!--<ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" >\n         {{item.timestamp}}\n       </ion-datetime>-->\n   </ion-item>\n    \n </ion-list> \n  \n</ion-content>\n<ion-footer>\n  <!--<form #f="ngForm">\n    <ion-grid>\n      <ion-row>\n        <ion-col width-80>\n          <ion-input [(ngModel)]="chat" name="chatText" required placeholder="pesan..."></ion-input>\n        </ion-col>\n        <ion-col>\n          <button ion-button  (click)="chatSend(f.value,f.valid)" [disabled]="f.valid===false">Send</button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </form>-->\n</ion-footer>\n          \n'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/home/home.html"*/
    }),
    home___metadata("design:paramtypes", [home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["b" /* Contacts */]])
], HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_apiservice__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_changepassword_changepassword__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_contacts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(55);
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
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            HomePage,
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(MyApp, {}, {
                links: [
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            MyApp,
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            HomePage,
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_contacts__["a" /* Contact */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_contacts__["b" /* Contacts */],
            { provide: app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_apiservice__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabase */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(109);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(98);
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
        // baseUrl="http://13.126.89.140:8080/api";
        this.baseUrl = "http://13.126.108.108:8080/api";
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
        // let user = {
        //         username:inputs.username,
        //        password: inputs.password
        //       };
        // console.log('121212',user)
        return this.http.post(this.baseUrl + '/login', inputs, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ApiServiceProvider.prototype.changePassword = function (inputs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var user = {
            token: inputs.token,
            password: inputs.password,
            new_pwd: inputs.new_pwd,
            confirm_pwd: inputs.confirm_pwd
        };
        console.log(user);
        return this.http.post(this.baseUrl + '/changepassword', user, { headers: headers });
    };
    ApiServiceProvider.prototype.profileInfo = function (token) {
        console.log('token testing in apiservice', token);
        return this.http.post(this.baseUrl + '/me', { token: token })
            .map(function (res) { return res.json(); });
    };
    return ApiServiceProvider;
}());
ApiServiceProvider = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */](),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ApiServiceProvider);

var _a, _b;
//# sourceMappingURL=apiservice.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, apiService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.token = window.localStorage.getItem('login_token');
        console.log('222222', this.token);
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.changePassword = function () {
        var user = {
            token: this.token,
            password: this.oldPass,
            new_pwd: this.newPass,
            confirm_pwd: this.conPass
        };
        console.log(user);
        this.apiService.changePassword(user)
            .subscribe(function (res) {
            console.log('333333', res.json());
        }, function (err) {
            console.log(err);
        });
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-changepassword',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/changepassword/changepassword.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="content" padding>\n  <div class="login-box">\n    \n    <form (ngSubmit)="changePassword()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Old Password" name="oldPass"\n               [(ngModel)]="oldPass" required></ion-input>\n            </ion-item>\n\n               <ion-item>\n              <ion-input type="text" placeholder="New Password" name="newPass"\n               [(ngModel)]="newPass" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Confirm Password" name="conPass"\n               [(ngModel)]="conPass" required></ion-input>\n            </ion-item>\n\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn"  full type="submit" \n          [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/changepassword/changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_apiservice__["a" /* ApiServiceProvider */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_apiservice__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    //  loading: Loading;
    // registerCredentials = { email: '', password: '' };
    function LoginPage(nav, alertCtrl, apiService, loadingCtrl, storage) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        // this.showLoading()
        // this.auth.login(this.registerCredentials).subscribe(allowed => {
        //   if (allowed) {        
        //     this.nav.setRoot('HomePage');
        //   } else {
        //     this.showError("Access Denied");
        //   }
        // },
        //   error => {
        //     this.showError(error);
        //   });
    };
    LoginPage.prototype.showLoading = function () {
        // this.loading = this.loadingCtrl.create({
        //   content: 'Please wait...',
        //   dismissOnPageChange: true
        // });
        // this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        // this.loading.dismiss();
        // let alert = this.alertCtrl.create({
        //   title: 'Fail',
        //   subTitle: text,
        //   buttons: ['OK']
        // });
        // alert.present(prompt);
    };
    LoginPage.prototype.login123 = function () {
        var _this = this;
        var user = {
            username: this.number,
            password: this.password
        };
        console.log(user);
        this.apiService.login123(user)
            .subscribe(function (res) {
            _this.storage.set('login_token', res.token);
            console.log(res.token);
            // let res1=res;
            // window.localStorage.setItem('login_token',res1.token);
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            console.log(err.json());
            _this.err = err.json().message;
        });
    };
    LoginPage.prototype.changePassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-login',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/login/login.html"*/' \n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="http://placehold.it/300x200"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n   <div>\n      <p>{{err}}</p>\n    </div>\n  <div class="login-box">\n    <form (ngSubmit)="login123()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="number" \n              placeholder="Enter Mobile Number" name="number" \n              [(ngModel)]="number" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" \n              name="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit"\n           [disabled]="!registerForm.form.valid">Login</button>\n          <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n           <button ion-button class="register-btn" block clear (click)="changePassword()">Change Password</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_apiservice__["a" /* ApiServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_apiservice__["a" /* ApiServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
], LoginPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, apiService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.storage = storage;
        //  this.token=  window.localStorage.getItem('login_token');
        debugger;
        this.storage.get('login_token')
            .then(function (data) {
            console.log(data);
            _this.token = data;
            apiService.profileInfo(data)
                .subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err.json());
            });
        });
        //  apiService.profileInfo(this.token)
        //  .subscribe((res) => {
        //    console.log(res);
        //  },
        //  (err) =>{
        //    console.log(err);
        //  });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.profileInfo = function () {
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-profile',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>{{token}}\n</h1>\n</ion-content>\n'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_apiservice__["a" /* ApiServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_apiservice__["a" /* ApiServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], ProfilePage);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apiservice__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(43);
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
        this.registerCredentials = { number: '' };
        this.wantOtp = false;
    }
    RegisterPage.prototype.register123 = function () {
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
    //   createSuccess = false;
    // registerCredentials = { email: '', password: '' };
    RegisterPage.prototype.register = function () {
        // this.auth.register(this.registerCredentials).subscribe(success => {
        //   if (success) {
        //     this.createSuccess = true;
        //     this.showPopup("Success", "Account created.");
        //   } else {
        //     this.showPopup("Error", "Problem creating account.");
        //   }
        // },
        //   error => {
        //     this.showPopup("Error", error);
        //   });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        //   let alert = this.alertCtrl.create({
        //     title: title,
        //     subTitle: text,
        //     buttons: [
        //       {
        //         text: 'OK',
        //         handler: data => {
        //           if (this.createSuccess) {
        //             this.nav.popToRoot();
        //           }
        //         }
        //       }
        //     ]
        //   });
        //   alert.present();
        // }
    };
    return RegisterPage;
}());
RegisterPage = RegisterPage_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-register',template:/*ion-inline-start:"/home/disha/app/Vchat123/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="login-content" padding>\n  <div class="login-box">\n    \n    <form (ngSubmit)="register123()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <!--<ion-item>\n              <ion-input type="number" placeholder="Enter Mobile Number" name="number"\n               [(ngModel)]="registerCredentials.number" required></ion-input>\n            </ion-item>-->\n\n               <ion-item>\n              <ion-input type="number" placeholder="Enter Mobile Number" name="number"\n               [(ngModel)]="number" required></ion-input>\n            </ion-item>\n            \n            <!--<ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>-->\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" \n          [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/disha/app/Vchat123/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_apiservice__["a" /* ApiServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], RegisterPage);

var RegisterPage_1;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 66;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/changepassword/changepassword.module": [
		384,
		3
	],
	"../pages/login/login.module": [
		386,
		2
	],
	"../pages/profile/profile.module": [
		385,
		1
	],
	"../pages/register/register.module": [
		387,
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
webpackAsyncContext.id = 70;

/***/ })

},[108]);
//# sourceMappingURL=main.js.map