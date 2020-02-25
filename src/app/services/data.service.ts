import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    cartItems = [];

    constructor(private http : HttpClient) { 
        // console.log("DS called", this.cartItems);
        // this.cartItems = this.getCartItems();
    }

    // getCartItems():any{
         // Get the Cart Items from loacal Json
        
    // }
}
