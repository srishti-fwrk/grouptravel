import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

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

}
