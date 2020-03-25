import { Injectable } from "@angular/core";

@Injectable()
export class GlobalProvider {
//this is a global variable
viewcart: any = [];
WholesalerAddress:any=[];
total:any;
cartCount:any;
}