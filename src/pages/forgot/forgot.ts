import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import 'rxjs/add/operator/map';
import {LoadingController} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html'
})
export class ForgotPage {
public data = '';
public Loading=this.loadingCtrl.create({
    content: 'Please wait...'
    
  });
  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http:Http,
                public appsetting: AppsettingProvider,
                public loadingCtrl:LoadingController,
                private toastCtrl: ToastController) {

  }
  forgot(form){
            let headers = new Headers();
            headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
            let options= new RequestOptions({ headers: headers });

        var data ={
         email:form.value.email,
       }
   var Serialized = this.serializeObj(data);
   console.log(data);
   this.http.post(this.appsetting.myGlobalVar + 'users/forgetpass', Serialized, options).map(res=>res.json()).subscribe(data=>{
   this.Loading.dismiss();
   console.log(data)
if(data.error == 0){
 this.data = data;
   console.log(this.data);
  // localStorage.clear();
   let toast = this.toastCtrl.create({
    message: data.message,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
   //alert(data.msg);
  
}else{
  let toast = this.toastCtrl.create({
    message: data.message,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
 // alert(data.msg);
}
    
     
    })
}



 serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  openresetpassword(){
	  this.navCtrl.push(ResetpasswordPage);
  }

}
