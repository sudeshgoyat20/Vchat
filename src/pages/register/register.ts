import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http'
import { HomePage } from "../home/home";
import { ApiServiceProvider } from "../../providers/apiservice";
import { LoginPage } from "../login/login";
 
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
    registerCredentials = { number: '' };
  email: string;
  password: string;
 number:number;
 wantOtp=false;
  constructor(public nav: NavController,private apiService:ApiServiceProvider,
   public http: Http,public loadingCtrl: LoadingController) {
 
  }
 
  register123(){  
  
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
   
    });
   
    loader.present();

     this.wantOtp=true;

    let credentials = {
        // email: this.email,
        // password: this.password
        mobile:this.number
      };
   
 this.apiService.register(credentials)
 .subscribe((res)=>{
   loader.dismiss();
    window.localStorage.setItem('token',JSON.stringify(res));
    window.localStorage.setItem('mobile_no',JSON.stringify(this.number))
   console.log('token',res.json())
   this.nav.push(LoginPage);
  
 },
(err)=>{
  console.log(err);
}
 );

 
  }
 
  launchSignup(){
    this.nav.push(RegisterPage);
  }

  //   createSuccess = false;
  // registerCredentials = { email: '', password: '' };
 
 
 
  public register() {
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
  }
 
  showPopup(title, text) {
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

   
}
}
