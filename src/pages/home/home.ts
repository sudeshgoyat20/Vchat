import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firelist: FirebaseListObservable<any[]>;
  chat:any;
myDate: String = new Date().toISOString();
  constructor(public navCtrl: NavController,private af: AngularFireDatabase,
  private contacts: Contacts) {
this.firelist=af.list('/chat',{
  query:{
    orderByChild:"negativtimestamp"
  }
});
  }
chatSend(va,vi){
  this.af.list('/chat').push({
    uid:window.localStorage.getItem('uid'),
        username:window.localStorage.getItem('displayName'),
            img:window.localStorage.getItem('photoUrl'),
            chat_text:va.chatText,
            timestamp:Date.now(),
            negativtimestamp:-Date.now()
  })
  // console.log( Date.UTC())
  this.chat='';
}

logout(){
  window.localStorage.removeItem('uid');
   window.localStorage.removeItem('displayName');
    window.localStorage.removeItem('photoUrl');
}
}
