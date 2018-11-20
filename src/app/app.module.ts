import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './components/products/product.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        ProductModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})

export class AppModule {}