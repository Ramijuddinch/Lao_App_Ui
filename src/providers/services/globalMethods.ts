import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertService } from './alert_service';
import { LoaderService } from './loader';
import { Events } from 'ionic-angular';

@Injectable()
export class GlobalMethods {
    // url: any;
    constructor(
        private _http: Http,
        private loader: LoaderService,
        private event: Events,
        private alert: AlertService
    ) { }
    public ProcessPutRequest(url: string, params?: any) {
        // let token = localStorage.getItem('_Token');
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        });
        let returnValue = this.Put(url, params, options);
        return returnValue;
    }

    public ProcessPostRequest(url: string, params?: any) {
        console.log(url)
        // let token = localStorage.getItem('_Token');
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            })
        });
        let returnValue = this.Post(url, params, options);
        return returnValue;
    }

    public ProcessGetRequest(url: string) {
        // let token = localStorage.getItem('_Token');
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            })
        });
        return this.Get(url, options);
    }

    private Post(url: string, params: any, options: any) {
        return new Promise((resolve, reject) => {
            this._http.post(url, params, options)
                .subscribe(data => {
                    resolve(data.json());
                }, error => {
                    this.loader.hide();
                    if (error.status == 401) {
                        // this.UnAuthorize();
                    }
                    console.log(error);
                    reject(error);
                });
        });
    }

    private Put(url: string, params: any, options: any) {
        return new Promise((resolve, reject) => {
            this._http.put(url, params, options)
                .subscribe(data => {
                    resolve(data.json());
                }, error => {
                    this.loader.hide();
                    if (error.status == 401) {
                        // this.UnAuthorize();
                    }
                    console.log(error);
                    reject(error);
                });
        });
    }

    private Get(url: string, options: any) {
        return new Promise((resolve, reject) => {
            this._http.get(url, options)
                .subscribe(data => {
                    resolve(data.json());
                }, error => {
                    this.loader.hide();
                    if (error.status == 401) {
                        // this.UnAuthorize();
                    }
                    console.log(error);
                    reject(error);
                });
        });
    }

}