import { Component, Input } from '@angular/core';
import { NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { DataHandler } from '../../Datahandler/datahandler';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input('withlogo') withlogo;
  @Input('titleHeader') titleHeader;
  showLogo: boolean = true;
  productLength: any;
  mobile: any;
  constructor(public navCtrl: NavController,public events: Events,public dataHandler : DataHandler,
    public serviceHandler : ServicesProvider,
    public menu: MenuController, public navParams: NavParams) {
      this.events.subscribe('productCount:addCount', (productLength, addCount) => {
        if (addCount == true) {
          this.productLength = productLength;
        }
      });
      this.dataHandler.storage.get("mobile").then(mobile => {
        this.mobile = mobile
        this.viewCart();
    })
  }
  ngOnInit(){
  if (this.navCtrl.getActive().id == 'MycartPage') {
    this.showLogo = false;
  }

}
  onOpenMenu() {
    this.menu.open();
  }
  OpenNotification(){
    this.navCtrl.push('NotificationsPage');

  }
  OpenViewDetail(){
    this.navCtrl.push('UserdetailsPage');

  }
  

  cart(){
    this.navCtrl.push('MycartPage');
  }
  setFilteredCategory(){
    this.navCtrl.push('SearchPage');
  }
  viewCart(){
    this.serviceHandler.View_Cart(this.mobile).then(value =>{
      if(value['code']== 200){
        this.productLength = value['message'].length;
      }
     
    })
  }
}
