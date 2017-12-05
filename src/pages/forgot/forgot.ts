import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResetpasswordPage } from '../resetpassword/resetpassword';

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html'
})
export class ForgotPage {

  constructor(public navCtrl: NavController) {

  }
  openresetpassword(){
	  this.navCtrl.push(ResetpasswordPage);
  }

}
