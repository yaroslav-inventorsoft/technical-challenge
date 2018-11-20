import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    MatListModule
} from '@angular/material';
import { ProductList } from './product.list';
import { ProductModal } from './edit/modal';

/**
 * Product Module
 */
@NgModule({
    declarations   : [
        ProductList,
        ProductModal
    ],
    imports        : [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatListModule,
        MatSelectModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        ProductModal
    ]
})

export class ProductModule {}