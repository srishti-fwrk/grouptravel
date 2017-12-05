import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the AppsettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppsettingProvider {
myGlobalVar: string ='http://ecommerce-env.w3irwggdkc.us-east-2.elasticbeanstalk.com/api/'; //shop/shippingaddress
  constructor(public http: Http) {
    console.log('Hello AppsettingProvider Provider');
  }

}
