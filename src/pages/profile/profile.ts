import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from "../../providers/apiservice";

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
token:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private apiService:ApiServiceProvider, public storage: Storage) {

    //  this.token=  window.localStorage.getItem('login_token');
    debugger
        this.storage.get('login_token')
        .then((data) => {
          console.log(data);
    this.token = data

apiService.profileInfo(data)
.subscribe((res) =>{
  console.log(res);
},
(err) =>{
  console.log(err.json());
})


        },
        
        )
        
        


  //  apiService.profileInfo(this.token)
  //  .subscribe((res) => {
  //    console.log(res);
  //  },
  //  (err) =>{
  //    console.log(err);
  //  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
profileInfo(){

}
}
