import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GetstartedPage } from '../pages/getstarted/getstarted';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ForgotPage } from '../pages/forgot/forgot';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { My_tripPage } from '../pages/my_trip/my_trip';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
	GetstartedPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	SignupPage,
	SigninPage,
	ForgotPage,
	My_tripPage,
	ChangepasswordPage,
	ResetpasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	GetstartedPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	SignupPage,
	SigninPage,
	ForgotPage,
	My_tripPage,
	ChangepasswordPage,
	ResetpasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
