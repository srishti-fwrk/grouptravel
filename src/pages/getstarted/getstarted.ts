import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-getstarted',
  templateUrl: 'getstarted.html'
})
export class GetstartedPage {

  constructor(public navCtrl: NavController) {

  }
  opensignuppage(){
	  this.navCtrl.push(SignupPage)
  }
   signinpage(){
	  this.navCtrl.push(SigninPage)
  }

}
