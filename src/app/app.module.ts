import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModuleComponent } from './pages/cart-module/cart-module.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { DataService } from 'src/app/services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';    
import {MatDialogModule} from '@angular/material/dialog';
import { ItemDialogComponent } from './pages/item-dialog/item-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    declarations: [
        AppComponent,
        CartModuleComponent,
        ItemDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatBadgeModule,
        MatCardModule,
        HttpClientModule,
        MatTableModule,
        MatDividerModule,
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatSnackBarModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent],
    entryComponents: [
        CartModuleComponent,
        ItemDialogComponent
    ]
})
export class AppModule { }
