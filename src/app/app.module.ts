import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { HttpModule } from "@angular/http";
import { ApiServiceProvider } from "../providers/apiservice";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ChangepasswordPage } from "../pages/changepassword/changepassword";
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { ProfilePage } from "../pages/profile/profile";

  var config = {
    apiKey: "AIzaSyAOLpLp9iVgw4wmfuiSAsBRBqxs_-12UZA",
    authDomain: "library-ab926.firebaseapp.com",
    databaseURL: "https://library-ab926.firebaseio.com",
    projectId: "library-ab926",
    storageBucket: "library-ab926.appspot.com",
    messagingSenderId: "898518520739"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ChangepasswordPage,
    RegisterPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
       IonicStorageModule.forRoot(),
     AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
   ChangepasswordPage,
    RegisterPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  AngularFireAuth,
  Contact,
  Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      ApiServiceProvider,
      AngularFireDatabase
  ]
})
export class AppModule {}
