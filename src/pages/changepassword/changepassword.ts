import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from "../../providers/apiservice";

 
@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
oldPass:any;
newPass:any;
conPass:any;
token:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private apiService:ApiServiceProvider,) {
  this.token=  window.localStorage.getItem('login_token');
  console.log('222222',this.token);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

changePassword(){
let user={
    token:this.token,
    password:this.oldPass,
    new_pwd:this.newPass,
    confirm_pwd:this.conPass
  
}
console.log(user);
 this.apiService.changePassword(user)
 .subscribe((res) =>{
   console.log('333333',res.json());
 },
 (err)=>{
   console.log(err);
 }
 );


}

}
