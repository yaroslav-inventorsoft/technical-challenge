import { Component,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first, pluck } from 'rxjs/operators';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ProductService } from '../../common/services/product.service';
import { ProductModel } from '../../common/models/product.model';
import { ProductModal } from './edit/modal';

/**
 * Product list component
 */
@Component({
    templateUrl : './template.html',
    styleUrls   : ['style.scss']
})
export class ProductList {
    productList      : Array<ProductModel> = [];
    columnsToDisplay : Array<string> = ['id', 'name', 'description', 'price'];
    
    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: ProductService,
                public dialog: MatDialog) {
        this.getProductList();
        this.route.queryParams
            .pipe(first())
            .subscribe(params => {
                if(params.id) {
                    this.onEdit(params.id);
                }
            });
    }
    
    /**
     * get product list
     */
    getProductList() {
        this.service.getList()
            .pipe(
                first(),
                pluck('products')
            )
            .subscribe(
                (list: Array<ProductModel>) => {
                    this.productList = list;
                },
                error => {
                    console.error('Issue with getting product list!');
                }
            )
    }
    
    /**
     * edit product data
     * @param id - product id
     */
    onEdit(id) {
        this.buildEditModal(id)
            .subscribe(updated => {
                if (updated) {
                    this.getProductList();
                }
            });
    }
    
    /**
     * build modal window for edit product details
     * @param id - product id
     */
    buildEditModal(id) {
        let dialogRef: MatDialogRef<ProductModal>;
        let config = new MatDialogConfig();
    
        config = {
            data        : { id },
            panelClass  : 'product-details',
            width       : '550px',
            height      : '650px',
            disableClose: true
        };
        
        dialogRef = this.dialog.open(ProductModal, config);
        this.router.navigate(['/products'], {queryParams: {id: id}});
        
        return dialogRef.afterClosed();
    }
    
}