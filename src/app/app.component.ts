import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge'
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'EcommerceSite';
    cartItemsData = [];

    constructor(private http: HttpClient, private dataService: DataService){
        // Get the Cart Items from loacal Json
        this.http.get("./assets/data/cart.json").subscribe(
            // Success
            val => {
                console.log("Cart ites fetched successfully..!");
                this.cartItemsData = val["productsInCart"];
                this.dataService.cartItems = this.cartItemsData;
            },
            // Error
            response => {
                console.log("Issue while fetching Cart Items", response);
        });
    }
}
