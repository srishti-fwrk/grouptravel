import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { My_tripPage } from '../my_trip/my_trip';

@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html'
})
export class ChangepasswordPage {

  constructor(public navCtrl: NavController) {

  }
  openmytripPage(){
	  this.navCtrl.push(My_tripPage)
  }

}
