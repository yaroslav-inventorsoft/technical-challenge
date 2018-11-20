import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { first } from 'rxjs/operators';
import { ProductService } from '../../../common/services/product.service';
import { ProductDetailsModel } from '../../../common/models/product.details.model';
import { ExtrasItemModel } from '../../../common/models/extras.item.model';
import { ProductModel } from '../../../common/models/product.model';

/**
 * Edit product component
 */
@Component({
    templateUrl : './template.html',
    styleUrls   : ['style.scss']
})

export class ProductModal implements OnInit {
    id          : number;
    //productDataFromList: ProductModel;
    productForm : FormGroup;
    details     : ProductDetailsModel;
    isReady     : boolean = false;
    isValidMilkOption: boolean = false;
    headerImg   : string;
    productQuantity:number = 1;
    milkOptionList      : Array<ExtrasItemModel>;
    syrupOptionList     : Array<ExtrasItemModel>;
    chocoladeOptionList : Array<ExtrasItemModel>;
    sum: number;
    
    constructor(private fb: FormBuilder,
                private router: Router,
                private service: ProductService,
                private dialogRef: MatDialogRef<ProductModal>,
                @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    ngOnInit() {
        this.id = this.data.id;
        //this.productDataFromList = this.data['product'];
        this.initForm();
        this.getProductDetails();
    }
    
    /**
     *
     */
    initForm() {
        this.productForm = this.fb.group({
            milkOption      : [null, Validators.required],
            syrupOption     : [null],
            chocoladeOption : [null],
        });
    }
    
    /**
     * get product details
     */
    getProductDetails() {
        this.service.getProduct(this.id)
            .pipe(
                first()
            )
            .subscribe(
                (product: ProductDetailsModel) => {
                    this.details   = product;
                    this.sum       = this.details.price;
                    this.headerImg = this.details.images['thumbnail'];
                    [this.milkOptionList, this.syrupOptionList, this.chocoladeOptionList] = this.details.extras.map(extra => extra.items);
                    
                    this.isReady   = true;
                },
                error => {
                    console.error('Issue with getting product details!');
                }
            )
    }
    
    /**
     * on increase product quantity
     */
    onIncreaseQuantity() {
        this.productQuantity++;
        this.onCalculate();
    }
    
    /**
     * on reduce product quantity
     */
    onReduceQuantity() {
        if(this.productQuantity > 1) {
            this.productQuantity--;
            this.onCalculate();
        }
    }
    
    /**
     * calculate sum
     */
    onCalculate() {
        this.sum = this.productQuantity * (this.details.price + this.onCalculateAdditionalIngredient());
    }
    
    /**
     * calculate sum for additional ingredients
     */
    onCalculateAdditionalIngredient() {
        let result = 0;
        
        if(this.productForm.controls.milkOption.value) result += this.productForm.controls.milkOption.value.price;
        
        if(this.productForm.controls.syrupOption.value) result += this.productForm.controls.syrupOption.value.price;
        
        if(this.productForm.controls.chocoladeOption.value) {
            this.productForm.controls.chocoladeOption.value.forEach(
                item => {
                    result += item.price;
                }
            );
        }
        
        return result;
    }
    
    /**
     * on reset syrup options
     */
    onResetSyrup() {
        this.productForm.controls.syrupOption.reset();
        this.onCalculate();
    }
    
    /**
     * on submit product data
     */
    onSubmit() {
        if(this.productForm.valid) {
            this.dialogRef.close(this.productForm.value);
            this.isValidMilkOption = false;
            console.info('Product has been successfully added to cart!');
            this.router.navigate(['/products']);
        } else {
            this.isValidMilkOption = true;
        }
    }
    
    
    /**
     * cancel action
     * @param e - cancel event
     */
    onCancel(e) {
        this.router.navigate(['/products']);
        this.dialogRef.close();
    }
}