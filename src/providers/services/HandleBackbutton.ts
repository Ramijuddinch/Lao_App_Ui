import { Injectable } from '@angular/core';
import {AlertController, Events, Platform, ToastController } from 'ionic-angular';
// import { AlertService } from '../service/alert_service';

@Injectable()
export class HandleBackbuttonPage {
    lastTimeBackPress: any = 0;
    mobileNumber: any;

    constructor(
        public _platform: Platform,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        // public _alert: AlertService,
        public events: Events,
    ) {
    }

    HandleBackBtn() {
        let timePeriodToExit = 3000;
        if (new Date().getTime() - this.lastTimeBackPress < timePeriodToExit) {
            this._platform.exitApp(); //Exit from app
        } else {
            let toast = this.toastCtrl.create({
                message: 'Press back again to exit.',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.lastTimeBackPress = new Date().getTime();
        }
    }
}