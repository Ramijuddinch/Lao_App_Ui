import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { CognitoServiceProvider } from '../../providers/cognito-service/cognito-service'
import { Storage } from '@ionic/storage';
import { DataHandler } from "../../Datahandler/datahandler";
import { ServicesProvider } from '../../providers/services/services';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signInModel: any = {};
  constructor(public navCtrl: NavController, public serviceHandler: ServicesProvider, public events: Events, public navParams: NavParams,
    public storage: Storage, public cognitoService: CognitoServiceProvider, public dataHandler: DataHandler) {
  }

  ionViewDidLoad() {

  }
  login(signInModel) {
    if (signInModel.Password != signInModel.conpassword) {

    } else {
      // this.cognitoService.signUp(this.signInModel).then(res => {
      // console.log(res)
      this.dataHandler.storage.set('mobile', signInModel.mobileNo);
      this.events.publish('mobile', signInModel.mobileNo);

      this.dataHandler.storage.set('selectedLanguages', {
        code: 'en'
      });
      //commented by Mythreyi
      // this.navCtrl.push('OtpPage',{signInModel:signInModel});
      //changed by Mythreyi as per Chandra's mail
      this.navCtrl.setRoot('HomePage')
      // }).catch((error) => {
      //   console.log(error)
      //   // this.toastController.errorToast(error.message);
      // })
    }
  }
}
