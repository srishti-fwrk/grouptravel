import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPage } from '../forgot/forgot';
import {Http, Headers, RequestOptions} from '@angular/http';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import {LoadingController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ChangepasswordPage } from '../changepassword/changepassword';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
 public data = '';
  public Loading = this.loadingCtrl.create({
    content: 'Please wait...'

  });
  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http:Http,
                public appsetting: AppsettingProvider,
                public loadingCtrl:LoadingController,
                private toastCtrl: ToastController) {

  }
 public login(form) {
     let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
      let options = new RequestOptions({ headers: headers });
        var dataa = {
          email: form.value.email,
          password: form.value.password
        
        }
         var Serialized = this.serializeObj(dataa);
        console.log(dataa);
        this.http.post(this.appsetting.myGlobalVar + 'users/login', Serialized, options).map(res => res.json()).subscribe(data => {
        this.Loading.dismiss();
        console.log(data)
            if (data.error == 0) {
            this.data = data;
            let toast = this.toastCtrl.create({
              message: data.message,
              duration: 3000,
              position: 'middle'
            });
            toast.present();
           
          } else {
            let toast = this.toastCtrl.create({
              message: data.message,
              duration: 3000,
              position: 'middle'
            });
            toast.present();
            // alert(data.msg)
          }

        })
  }
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  openforgotPage(){
	  this.navCtrl.push(ForgotPage)
  }
ChangepasswordPage(){
   this.navCtrl.push(ChangepasswordPage) 
}
}
