import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

/**
 * Product service 
 */
@Injectable({
    providedIn: 'root'
})

export class ProductService {
    
    constructor(private http: HttpClient) {}

    /**
     * get product list
     */
    getList() {
        return this.http.get(environment.API_DATA_URL + 'menu.json')
            .pipe(
                catchError((error: HttpErrorResponse) => throwError(error))
            );
    }
    
    /**
     * get product data by id
     * @param id - product id
     */
    getProduct(id) {
        return this.http.get(environment.API_DATA_URL + 'product.json')
            .pipe(
                catchError((error: HttpErrorResponse) => throwError(error))
            );
    }
}