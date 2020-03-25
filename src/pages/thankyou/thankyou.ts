import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-thankyou',
  templateUrl: 'thankyou.html',
})
export class ThankyouPage {
  orderid: any;
  // message: any;
  file: any;
  // link: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
    this.orderid  = this.navParams.get("orderID");
  }

  share(){
    this.socialSharing.share(this.file)
    .then(()=>{

    }).catch(()=>{

    })
  }
  
  gotohome(){
    this.navCtrl.setRoot('TabPage');
  }
}
