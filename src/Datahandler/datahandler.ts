import { Injectable } from "@angular/core";
import { Events } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { Http } from "@angular/http";

@Injectable()
export class DataHandler {
  //variable declaration
  public now: Date = new Date();
  HAS_LOGGED_IN = "hasLoggedIn";
  date: any;

  constructor(
    public events: Events,
    public storage: Storage,
    public http: Http
  ) {
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }

  getLanguagecode(): Promise<string> {
    return this.storage.get("lang").then(code => {
      var value
      if (code != null) {
        value = code['languagecode']
      } else {
        value = "en"
      }

      return value;
    });
  }



  login(mobileNumber: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setmobileNumber(mobileNumber);
    this.events.publish("user:login");
  }

  setmobileNumber(mobileNumber: string): void {
    this.storage.set("mobile", mobileNumber);
  }

  getmobileNumber(): Promise<string> {
    return this.storage.get("mobile").then(value => {
      return value;
    });
  }

}
