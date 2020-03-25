import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CognitoServiceProvider } from '../../providers/cognito-service/cognito-service';
import {ToastProvider} from '../../providers/services/toast';
@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  signInModel: any;

  constructor(public navCtrl: NavController,public cognitoService : CognitoServiceProvider,public toast:ToastProvider,
     public navParams: NavParams) {
    this.signInModel = this.navParams.get('signInModel')
  }

  ionViewDidLoad() {

  }

    Verify(verificationCode, mobile) {
      // (mobile) ? this.signInModel.mobileNo = mobile : null;
      // this.cognitoService.confirmUser(verificationCode, this.signInModel.mobileNo).then(res => {
        this.navCtrl.setRoot('RegistrationPage')
      // })
    //     .catch((error) => {
    //     this.toast.show(error.message);
       
    // })
   

}
}
