import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
import { Storage } from '@ionic/storage';

import { Http, Headers } from '@angular/http';
import { ApiServiceProvider } from "../../providers/apiservice";
import { TabsPage } from "../tabs/tabs";
import { ChangepasswordPage } from "../changepassword/changepassword";
 
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 name: string;
  
  email: string;
 
  number: number;
 uid:any;
 username:number;
 password:any;
 token:any;
 err:any;
  //  loading: Loading;
  // registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController,
   private alertCtrl: AlertController,private apiService:ApiServiceProvider,
    private loadingCtrl: LoadingController,
    private storage: Storage) { }
 
  public createAccount() {
    this.nav.push(RegisterPage);
  }
 
  public login() {
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
  }
 
  showLoading() {
    // this.loading = this.loadingCtrl.create({
    //   content: 'Please wait...',
    //   dismissOnPageChange: true
    // });
    // this.loading.present();
  }
 
  showError(text) {
    // this.loading.dismiss();
 
    // let alert = this.alertCtrl.create({
    //   title: 'Fail',
    //   subTitle: text,
    //   buttons: ['OK']
    // });
    // alert.present(prompt);
  }
   
  login123(){
  let user = {
       
        username:this.number,
       password: this.password
      };
      console.log(user);
  this.apiService.login123(user)
  .subscribe((res) => {
    this.storage.set('login_token',res.token);
console.log(res.token);
// let res1=res;

// window.localStorage.setItem('login_token',res1.token);
this.nav.push(TabsPage);
  },
  (err)=>{
    console.log(err.json());
    this.err = err.json().message;
  });
  
  }
 
changePassword(){
  this.nav.push(ChangepasswordPage);
}





}
