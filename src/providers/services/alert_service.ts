import { Injectable } from '@angular/core';
import { AlertController, Alert } from 'ionic-angular';

@Injectable()
export class AlertService {
  private alert: Alert;
  private element: any;
  private isDDL: boolean = false;
  constructor(private alertCtrl: AlertController) {

  }

  public showAlert(title: string, subTitle: string, button: string): Promise<any> {
    return new Promise(resolve => {
      if (!this.alert) {
        this.alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          buttons: [{
            text: button,
            role: 'cancel',
            handler: () => {
              resolve();
              this.alert = null;
            }
          }]
        });
        this.alert.present();
      }
    });
  }

  public showConfirm(title: string, subTitle: string, cancelButton: string, okButton: string): Promise<boolean> {
    return new Promise(resolve => {
      if (!this.alert) {
        this.alert = this.alertCtrl.create({
          title: title,
          subTitle: subTitle,
          buttons: [
            {
              text: cancelButton,
              role: 'cancel',
              handler: () => {
                resolve(false);
                this.alert = null;
              },
            },
            {
              text: okButton,
              handler: () => {
                resolve(true);
                this.alert = null;
              },
            }]
        });
        this.alert.present();
      }
    });
  }
  Dismiss() {
    if (this.alert) {
      this.alert.dismiss().then(() => { this.alert = null })
    }
  }

  closeAlert() {
    if (this.alert) {
      this.alert.dismiss();
      this.alert = null;
    }
  }
  getAlert() {
    return this.alert;
  }
  _setMessage(msg){
    this.alert.setMessage(msg)
  }
  getElement() {
    return this.element;
  }

  setElement(element, isDDL?) {
    this.element = element;
    this.isDDL = isDDL;
    // alert(this.isDDL)
  }

  clearElement() {
    this.element = null;
    this.isDDL = false;
    // alert('clrea'+this.isDDL)
  }

  dismissElement() {
    if (this.element) {
      // alert(this.isDDL)
      this.isDDL ? this.element.close() : this.element.dismiss();
      this.clearElement();
    }
  }
}
