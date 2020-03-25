import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Form } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { LoaderService } from '../../providers/services/loader';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/services/toast';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  Username: number;
  password: string;
  displayDatas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ServicesProvider, public storage: Storage,
    public loader: LoaderService, public events: Events, public Toast: ToastProvider, ) {
      this.storage.set('selectedLanguages', {code : 'en'});
      
  }
  // commenting for temporary fix
  // login(){
  //   this.navCtrl.setRoot('TabPage')
  // }

  //modified code - Mythreyi - add api and add go to register page flow
  login() {
    const data = {
      "email": this.Username,
      "password": this.password,
    }
    this.provider.authenticate_retailers(data).then((response) => {
      console.log(response,"111111111111")
      this.loader.show();
      if (response['code'] == 200) {
        this.storage.set('displayDatas',response)
        this.storage.set('mobile', this.Username);
  //      this.events.publish('mobile', this.Username);
//this.events.publish('retailerDetails','hello')

        this.Toast.show('Login successfully')
        this.navCtrl.setRoot('TabPage')
        this.loader.hide();
   //     this.storage.set('userData', data);
     //   this.events.publish('userData', data);
      } else {
        this.Toast.show('User does not exist')
        this.loader.hide();
      }
    })
  }
  gotoRegister() {
    this.navCtrl.push('RegistrationPage')
  }
}
