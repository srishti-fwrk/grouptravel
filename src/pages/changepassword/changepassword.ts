import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { My_tripPage } from '../my_trip/my_trip';

@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html'
})
export class ChangepasswordPage {
public data = {};
  constructor(public navCtrl: NavController,
              ) {

  }

  openmytripPage(){
	  this.navCtrl.push(My_tripPage)
  }

}
