import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartModuleComponent } from '../cart-module/cart-module.component';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent implements OnInit {
    item = {};
    constructor(private dialogRef: MatDialogRef<CartModuleComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
        this.item = this.data;
    }

    ngOnInit() {
    }

    updateSize(elem){
        let size = elem.value;
    }

    updateColor(color){
        this.item["p_selected_color"] = color;
    }

    saveAndClose(){
        this.dialogRef.close(this.item);
    }

}
