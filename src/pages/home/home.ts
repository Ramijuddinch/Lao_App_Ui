import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { DataHandler } from '../../Datahandler/datahandler';
import { Storage } from '@ionic/storage';
import { ServicesProvider } from '../../providers/services/services';
import { LoaderService } from '../../providers/services/loader';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  isStore : boolean = false;
  selectWholesaler: any;
  mobile: any;
  catList: any = [];
  catcategories: any;
  allWholesalers : any = [];
  constructor(public navCtrl: NavController,public loader:LoaderService, public menu: MenuController,  public serviceHandler : ServicesProvider,
    public navParams: NavParams,public dataHandler :DataHandler) {
      this.getAllWholesalers();
      this.dataHandler.storage.get("selectWholesaler").then(selectWholesaler => {
        this.selectWholesaler = selectWholesaler;
        this.mobile = selectWholesaler.mobile;
        this.serviceHandler.Get_All_Categories(this.mobile).then((res) =>{
          this.catList = res['message'];
          this.catcategories=this.catList[0].categories;
        });
        });
      // this.dataHandler.storage.get("mobile").then(mobile => {
        // this.mobile = mobile;
       
      // })
  
  }

  ionViewDidLoad() {
  }
  getAllWholesalers(){
    this.serviceHandler.Get_All_Wholesalers().then((response) => {
      this.allWholesalers = response['message'];
    })
  }
  subcategoryPage(cate){
    this.navCtrl.push('ProductPage',{cat:cate,mobile :this.mobile });
  }

  selectSW(wholeseller){
    this.loader.show();
    this.dataHandler.storage.set('selectWholesaler', wholeseller);
    this.navCtrl.setRoot(this.navCtrl.getActive().component)
    this.loader.hide()
  }

  closeButon(){
    this.isStore == false;
  }
}
