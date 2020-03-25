import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';

@Injectable()
export class ToastProvider {
    private toast: Toast;
    private options: any = {
        position: 'top',//Position of Toast, top, middle, or bottom.
        duration: 1000,
    };
    private duration: number = 1000;
    constructor(private toastCtrl: ToastController
    ) {}

    public show(message: string): void {
        if (!this.toast) {
            let options: any = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.present();
            this.toast.onDidDismiss(() => {
                this.toast = null;
            });
        }
    }

    public showConnectionToast(message: string): void {
        if (!this.toast) {
            let options: any = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.present();
            this.toast.onDidDismiss(() => {
                this.toast = null;
            });
        }
    }

    public showWithDuration(message: string, duration: number): void {
        if (!this.toast) {
            let options: any = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.setDuration(duration);
            this.toast.present();
            this.toast.onDidDismiss(() => {
                this.toast = null;
            });
        }
    }

    public showWithButton(message: string, text: string): void {
        if (!this.toast) {
            let options: any = this.options;
            options.closeButtonText = text;
            options.showCloseButton = true;
            this.toast = this.toastCtrl.create(options);
            this.toast.setMessage(message);
            this.toast.present();
        }
    }

    public showError(code: string): void {
        if (!this.toast) {
            let options: any = this.options;
            options.showCloseButton = false;
            this.toast = this.toastCtrl.create(options);
            this.toast.setDuration(this.duration);
            this.toast.present();
            this.toast.onDidDismiss(() => {
                this.toast = null;
            });
        }
    }

    public hide(): void {
        if (this.toast) {
            this.toast.dismiss();
        }
    }

    public getToast(): Toast {
        return this.toast;
    }

    public clearToast(): void {
        this.toast = null;
    }
}
