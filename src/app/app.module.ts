import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { MyApp } from "./app.component";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpModule } from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { ServicesProvider } from "../providers/services/services";
import { AlertService } from "../providers/services/alert_service";
import { HandleBackbuttonPage } from "../providers/services/HandleBackbutton";
import { ToastProvider } from "../providers/services/toast";
import { LoaderService } from "../providers/services/loader";
import { IonicStorageModule } from "@ionic/storage";
import { ComponentsModule } from "../components/components.module";
import { CognitoServiceProvider } from '../providers/cognito-service/cognito-service';
import {GlobalMethods} from '../providers/services/globalMethods';
import { DataHandler } from "../Datahandler/datahandler";
import{GlobalProvider} from "../providers/services/global"
 import { SocialSharing } from '@ionic-native/social-sharing';

  import { File } from '@ionic-native/file/ngx';
@NgModule({
  declarations: [MyApp],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: "top",
      tabsHideOnSubPages: true,
      platforms: {
        android: {
          scrollAssist: false,
          autoFocusAssist: false
        },
        ios: {
          scrollAssist: false,
          autoFocusAssist: false
        }
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    HandleBackbuttonPage,
    AlertService,
    ServicesProvider,
    LoaderService,
    ToastProvider,
    ComponentsModule,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicesProvider,
    ToastProvider,
    IonicStorageModule,
    GlobalMethods,
    DataHandler,
    CognitoServiceProvider,
    GlobalProvider,
     SocialSharing,
     File

  ]
})
export class AppModule {}
