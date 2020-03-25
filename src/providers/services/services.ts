import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ApiUrl } from "./apiUrl";
import { GlobalMethods } from "./globalMethods";

@Injectable()
export class ServicesProvider {
  // url: any = '';
  constructor(public http: Http, private globalMethods: GlobalMethods) {}

  public Add_Retailers(data) {
    return this.globalMethods.ProcessPostRequest(ApiUrl.Insert_Retailer, data);
  }
  // public Get_Billing_Details(){
  //   return this.globalMethods.ProcessGetRequest(ApiUrl.Get_Bill);
  // }
  public EDIT_Retailers(data) {
    return this.globalMethods.ProcessPostRequest(ApiUrl.Edit_Retailer, data);
  }
  
//added by mythreyi 
  public authenticate_retailers(data) {
    return this.globalMethods.ProcessPostRequest(ApiUrl.Autheticate_Retailer, data);
  }

  public Get_All_Languanges() {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Languages);
  }

  public Get_All_Wholesalers() {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Wholesalers);
  }

  public Get_All_Categories(mobile) {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Categories + "?mobile=" + mobile);
  }

  public Add_To_Cart(data) {
    return this.globalMethods.ProcessPostRequest(ApiUrl.Add_to_Cart, data);
  }
  public Get_All_Products(catId,pageno,langCode,mobile) {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Products +"?category="+catId+"&page="+pageno +"&languange="+langCode+"&mobile="+mobile);
  }

  public View_Cart(mobile) {
    return this.globalMethods.ProcessGetRequest(ApiUrl.View_Cart +"?mobile="+mobile);
  }

  public Remove_Cart(id) {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Remove_Cart+"?id="+id);
  }

  public Place_Order(data) {
    return this.globalMethods.ProcessPostRequest(ApiUrl.Place_Order, data);
  }
  public Get_All_Order(id) {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Order+"?wholesalerid="+id);
  }
  public Get_My_Order(mobile) {
    //changed to wholesalerid as it was passing wrong - Mythreyi
    // return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Order+"?mobile="+mobile);
    return this.globalMethods.ProcessGetRequest(ApiUrl.Get_All_Order+"?wholesalerid="+mobile);
  }
  public Quick_Cart(proname,pageno,langCode,mobile) {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Quick_Cart+"?productname="+proname+'&page='+pageno+'&languange='+langCode+'&mobile='+mobile);
  }
  public Guick_All_products(pageno,langCode,mobile) {
    return this.globalMethods.ProcessGetRequest(ApiUrl.Guick_All_products+'?page='+pageno+'&languange='+langCode+'&mobile='+mobile);
  }

  
}
