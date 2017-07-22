import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class ApiServiceProvider {
  private currentUser: firebase.User;
// baseUrl="http://13.126.89.140:8080/api";
baseUrl="http://13.126.108.108:8080/api";

  constructor(public afAuth: AngularFireAuth,
   public http: Http) {
       afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
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


  register(inputs) {
        let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      console.log('111',inputs);
  //   let user_credential = {
  //     user:{
  //  mobile:inputs.number
  //     }

     
       
    
     
  //   };
  //    console.log('2222',JSON.stringify(user_credential));
    return this.http.post(this.baseUrl+'/register', inputs,{headers: headers})
    // .map(res => res.json())
  }

 

  login123(inputs){
       let headers = new Headers();
      headers.append('Content-Type', 'application/json');
// let user = {
       
//         username:inputs.username,
//        password: inputs.password
//       };
      // console.log('121212',user)
      return this.http.post(this.baseUrl+'/login', inputs,{headers: headers})
    .map(res => res.json());
  }
  changePassword(inputs){
       let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
let user={
    token:inputs.token,
    password:inputs.password,
    new_pwd:inputs.new_pwd,
    confirm_pwd:inputs.confirm_pwd
  
}
console.log(user);
     return this.http.post(this.baseUrl+'/changepassword', user,{headers: headers});
  }
  debugger
  profileInfo(token){
   
    console.log('token testing in apiservice',token);
  return this.http.post(this.baseUrl+'/me', {token: token})
     .map(res => res.json());
  
  }
  

}