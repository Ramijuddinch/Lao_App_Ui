import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoaderService {
  messages: any;
  private loading: Loading;

  constructor(private loadingCtrl: LoadingController) {
  }

  public show(timeout?: number): void {
    if (!this.loading) {
      let options = {
        spinner: 'hide',
        cssClass: 'Loader',
        content: `
        <img src="assets/icon/loder.svg" class="spinner">
        `,
        showBackdrop: false
      };
      this.loading = this.loadingCtrl.create(options);
      if (timeout) {
        this.loading.setDuration(timeout);
      }
      this.loading.present();
    }
  }

  public hide(): void {
    if (this.loading) {
      this.loading.dismiss().then(()=>{this.loading = null;});
    }
  }

  public getLoader(): Loading {
    return this.loading;
  }

  public clearLoader(): void {
    this.loading = null;
  }
}