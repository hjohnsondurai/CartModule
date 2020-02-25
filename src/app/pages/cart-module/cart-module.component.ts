import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-module',
  templateUrl: './cart-module.component.html',
  styleUrls: ['./cart-module.component.css']
})
export class CartModuleComponent implements OnInit {
    cartItemsData = [];
    grandTotal = 0;
    promotionCost = 0;
    stdShippingCharges = 2;
    isPromotionEligible = false;
    isFreeShipingEligible = false;
    savedForLaterItems = [];

    // To check wether the user is authendicated user by this boolean flag
    isUserAuthendicated = true;

    constructor(private dataService: DataService, private http: HttpClient, public dialog: MatDialog, private snakBar: MatSnackBar) {
        this.http.get("./assets/data/cart.json").subscribe(
            // Success
            (val) => {
                console.log("Cart ites fetched successfully..!");
                this.cartItemsData = val["productsInCart"];
                this.calculateTotal();
            },
            // Error
            response => {
                console.log("Issue while fetching Cart Items", response);
        });
    }
    
    openDialog(items) {
        const dialogRef = this.dialog.open(ItemDialogComponent,{ data : items});
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });

        dialogRef.afterClosed().subscribe(result => {
            this.calculateTotal();
        });
    }

    removeItem(index){
        this.cartItemsData.splice(index,1);
        this.showMessage("Item removed from cart..!");
        this.calculateTotal();
    }
    saveForLater(index){
        let remItem = this.cartItemsData.splice(index,1);
        this.savedForLaterItems.push(remItem);
        this.calculateTotal();
        this.showMessage("Item saved for later..!");
    }
    ngOnInit() {
        
    }

    showMessage(message: string) {
        this.snakBar.open(message,"Close", {
            duration: 3000,
        });
    }

    calculateTotal(){
        this.grandTotal = 0; 
        this.promotionCost = 0;
        this.isFreeShipingEligible = false;
        for(let i=0; i< this.cartItemsData.length; i++){
            this.grandTotal += (this.cartItemsData[i].p_price * this.cartItemsData[i].p_quantity)
        }
        if(this.grandTotal > 50){
            this.isFreeShipingEligible = true;
        }
        if(this.grandTotal > 70){
            // Apply 10% as promotion when total is more than $70
            this.promotionCost = this.grandTotal * (10/100);
        }
    }

    updateFromModel(item){
        alert();
    }
}