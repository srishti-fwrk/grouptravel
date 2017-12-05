import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgotPage } from '../forgot/forgot';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
  openforgotPage(){
	  this.navCtrl.push(ForgotPage)
  }

}
