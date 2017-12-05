import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { SigninPage } from '../signin/signin';
import {LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import {Http, Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
public data='';userdata;
public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  cons
  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http:Http,
                public appsetting: AppsettingProvider,
                public loadingCtrl:LoadingController,
                private toastCtrl: ToastController) {

  }
  public register(signup){
      alert("signin");
      let headers = new Headers();
      headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
      let options= new RequestOptions({ headers: headers });
       if (signup.value.password.indexOf(' ') >= 0) {
            let toast = this.toastCtrl.create({
              message: "Space not allowed",
              duration: 3000,
              position: 'middle'
            });
            toast.present();
             // alert("Space not allowed")
              }else{
                  var data ={
                        full_name:signup.value.name,
                        email:signup.value.email,
                        password:signup.value.password,
                        confirm_password: signup.value.cpassword,
                        
                    }
                    var Serialized = this.serializeObj(data);
                    console.log(data);
                    this.Loading.present();
                    this.http.post(this.appsetting.myGlobalVar + 'users/register', Serialized, options).map(res => res.json()).subscribe(dataa => {
                    this.Loading.dismiss();
                    
                    if(dataa.error == 0){
                        console.log(dataa)
                        let toast = this.toastCtrl.create({
                        message: dataa.msg,
                        duration: 3000,
                        position: 'middle'
                        });
                        toast.present();                    }
                    else{
                        alert(dataa.error)
                    }
     


        })

              }
  }
     serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  opensigninPage(){
	  this.navCtrl.push(SigninPage)
  }

}
