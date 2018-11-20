(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var product_list_1 = __webpack_require__(/*! ./components/products/product.list */ "./src/app/components/products/product.list.ts");
var modal_1 = __webpack_require__(/*! ./components/products/edit/modal */ "./src/app/components/products/edit/modal.ts");
var routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: product_list_1.ProductList
    },
    {
        path: 'products/:id',
        component: modal_1.ProductModal
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./template.html */ "./src/app/template.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var product_module_1 = __webpack_require__(/*! ./components/products/product.module */ "./src/app/components/products/product.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                product_module_1.ProductModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/common/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/product.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/**
 * Product service
 */
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    /**
     * get product list
     */
    ProductService.prototype.getList = function () {
        return this.http.get(environment_1.environment.API_DATA_URL + 'menu.json')
            .pipe(operators_1.catchError(function (error) { return rxjs_1.throwError(error); }));
    };
    /**
     * get product data by id
     * @param id - product id
     */
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(environment_1.environment.API_DATA_URL + 'product.json')
            .pipe(operators_1.catchError(function (error) { return rxjs_1.throwError(error); }));
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/app/components/products/edit/modal.ts":
/*!***************************************************!*\
  !*** ./src/app/components/products/edit/modal.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var product_service_1 = __webpack_require__(/*! ../../../common/services/product.service */ "./src/app/common/services/product.service.ts");
/**
 * Edit product component
 */
var ProductModal = /** @class */ (function () {
    function ProductModal(fb, router, service, dialogRef, data) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isReady = false;
        this.isValidMilkOption = false;
        this.productQuantity = 1;
    }
    ProductModal.prototype.ngOnInit = function () {
        this.id = this.data.id;
        //this.productDataFromList = this.data['product'];
        this.initForm();
        this.getProductDetails();
    };
    /**
     *
     */
    ProductModal.prototype.initForm = function () {
        this.productForm = this.fb.group({
            milkOption: [null, forms_1.Validators.required],
            syrupOption: [null],
            chocoladeOption: [null],
        });
    };
    /**
     * get product details
     */
    ProductModal.prototype.getProductDetails = function () {
        var _this = this;
        this.service.getProduct(this.id)
            .pipe(operators_1.first())
            .subscribe(function (product) {
            var _a;
            _this.details = product;
            _this.sum = _this.details.price;
            _this.headerImg = _this.details.images['thumbnail'];
            _a = _this.details.extras.map(function (extra) { return extra.items; }), _this.milkOptionList = _a[0], _this.syrupOptionList = _a[1], _this.chocoladeOptionList = _a[2];
            _this.isReady = true;
        }, function (error) {
            console.error('Issue with getting product details!');
        });
    };
    /**
     * on increase product quantity
     */
    ProductModal.prototype.onIncreaseQuantity = function () {
        this.productQuantity++;
        this.onCalculate();
    };
    /**
     * on reduce product quantity
     */
    ProductModal.prototype.onReduceQuantity = function () {
        if (this.productQuantity > 1) {
            this.productQuantity--;
            this.onCalculate();
        }
    };
    /**
     * calculate sum
     */
    ProductModal.prototype.onCalculate = function () {
        this.sum = this.productQuantity * (this.details.price + this.onCalculateAdditionalIngredient());
    };
    /**
     * calculate sum for additional ingredients
     */
    ProductModal.prototype.onCalculateAdditionalIngredient = function () {
        var result = 0;
        if (this.productForm.controls.milkOption.value)
            result += this.productForm.controls.milkOption.value.price;
        if (this.productForm.controls.syrupOption.value)
            result += this.productForm.controls.syrupOption.value.price;
        if (this.productForm.controls.chocoladeOption.value) {
            this.productForm.controls.chocoladeOption.value.forEach(function (item) {
                result += item.price;
            });
        }
        return result;
    };
    /**
     * on reset syrup options
     */
    ProductModal.prototype.onResetSyrup = function () {
        this.productForm.controls.syrupOption.reset();
        this.onCalculate();
    };
    /**
     * on submit product data
     */
    ProductModal.prototype.onSubmit = function () {
        if (this.productForm.valid) {
            this.dialogRef.close(this.productForm.value);
            this.isValidMilkOption = false;
            console.info('Product has been successfully added to cart!');
            this.router.navigate(['/products']);
        }
        else {
            this.isValidMilkOption = true;
        }
    };
    /**
     * cancel action
     * @param e - cancel event
     */
    ProductModal.prototype.onCancel = function (e) {
        this.router.navigate(['/products']);
        this.dialogRef.close();
    };
    ProductModal = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./template.html */ "./src/app/components/products/edit/template.html"),
            styles: [__webpack_require__(/*! ./style.scss */ "./src/app/components/products/edit/style.scss")]
        }),
        __param(4, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router,
            product_service_1.ProductService,
            material_1.MatDialogRef, Object])
    ], ProductModal);
    return ProductModal;
}());
exports.ProductModal = ProductModal;


/***/ }),

/***/ "./src/app/components/products/edit/style.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/products/edit/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-view .modal-header-image {\n  width: 100%; }\n  .modal-view .modal-header-image .back-button {\n    position: absolute;\n    margin: 1em;\n    color: #acacb1;\n    background-color: #f2f2f2;\n    z-index: 1; }\n  .modal-view .modal-header-image .product-image {\n    width: 100%; }\n  .modal-view .product-head-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .modal-view .product-counter {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em; }\n  .modal-view .product-counter .quantity-button {\n    display: flex;\n    align-items: center; }\n  .modal-view .product-counter .quantity-button .mat-mini-fab.mat-accent {\n      font-weight: 100;\n      color: #fff;\n      font-size: 3em; }\n  .modal-view .product-counter .quantity-button .mat-mini-fab:disabled {\n      cursor: not-allowed; }\n  .modal-view .product-counter h1 {\n    margin-top: 1em;\n    font-weight: 500; }\n  .modal-view .product-counter h2 {\n    padding: 0 1.5em; }\n  .modal-view .syrup-options {\n  display: flex;\n  width: 100%;\n  justify-content: space-between; }\n  .modal-view .add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .modal-view .mat-raised-button:not([class*='mat-elevation-z']) {\n  color: white;\n  background-color: #372922;\n  width: 100%;\n  margin: 1em; }\n  .modal-view .mat-dialog-actions {\n  display: flex;\n  justify-content: center; }\n  .modal-view .bg-header {\n  background-color: #f2f2f2; }\n  .modal-view .bg-button-accent {\n  background-color: #b6b6ba; }\n  .modal-view .bg-button-primary {\n  background-color: #a27959; }\n  .modal-view .mat-radio-button {\n  width: 100%; }\n  .modal-view .error-block {\n  width: 100%;\n  background-color: #e4e4e4; }\n  .modal-view .error-block .error-message {\n    text-align: center;\n    font-weight: 400;\n    padding: 2px 15px;\n    font-size: 14px;\n    line-height: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhcm9zbGF2L0lkZWFQcm9qZWN0cy90ZWNobmljYWwtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9lZGl0L3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFXLEVBV2Q7RUFiTDtJQUlZLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsZUFBYztJQUNkLDBCQUF5QjtJQUN6QixXQUFVLEVBQ2I7RUFUVDtJQVdZLFlBQVcsRUFDZDtFQVpUO0VBZ0JRLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0JBQW1CLEVBQ3RCO0VBbkJMO0VBc0JRLGNBQWE7RUFDYiwrQkFBOEI7RUFDOUIsYUFBWSxFQXNCZjtFQTlDTDtJQTBCWSxjQUFhO0lBQ2Isb0JBQW1CLEVBV3RCO0VBdENUO01BOEJvQixpQkFBZ0I7TUFDaEIsWUFBVztNQUNYLGVBQWMsRUFDakI7RUFqQ2pCO01BbUNvQixvQkFBbUIsRUFDdEI7RUFwQ2pCO0lBd0NZLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25CO0VBMUNUO0lBNENZLGlCQUFnQixFQUNuQjtFQTdDVDtFQWlEUSxjQUFhO0VBQ2IsWUFBVztFQUNYLCtCQUE4QixFQUNqQztFQXBETDtFQXVEUSxjQUFhO0VBQ2IsK0JBQThCO0VBQzlCLG9CQUFtQixFQUN0QjtFQTFETDtFQTZEUSxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxZQUFXLEVBQ2Q7RUFqRUw7RUFvRVEsY0FBYTtFQUNiLHdCQUF1QixFQUMxQjtFQXRFTDtFQXlFUSwwQkFBeUIsRUFDNUI7RUExRUw7RUE2RVEsMEJBQXlCLEVBQzVCO0VBOUVMO0VBaUZRLDBCQUF5QixFQUM1QjtFQWxGTDtFQXFGUSxZQUFXLEVBQ2Q7RUF0Rkw7RUF5RlEsWUFBVztFQUNYLDBCQUF5QixFQVE1QjtFQWxHTDtJQTRGWSxtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZWRpdC9zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXZpZXcge1xuICAgIC5tb2RhbC1oZWFkZXItaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgICAgY29sb3I6ICNhY2FjYjE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9kdWN0LWhlYWQtZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtY291bnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAucXVhbnRpdHktYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLm1hdC1taW5pLWZhYiB7XG4gICAgICAgICAgICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuNWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN5cnVwLW9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzcyOTIyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgfVxuXG4gICAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5iZy1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIH1cblxuICAgIC5iZy1idXR0b24tYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjZiYTtcbiAgICB9XG5cbiAgICAuYmctYnV0dG9uLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTI3OTU5O1xuICAgIH1cblxuICAgIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmVycm9yLWJsb2NrIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/products/edit/template.html":
/*!********************************************************!*\
  !*** ./src/app/components/products/edit/template.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-view\" *ngIf=\"isReady\">\n    <form (ngSubmit)=\"onSubmit()\"\n          [formGroup]=\"productForm\"\n          autocomplete=\"off\"\n          novalidate>\n\n        <div class=\"modal-header-image\">\n            <button mat-mini-fab\n                    type=\"button\"\n                    (click)=\"onCancel($event)\"\n                    color=\"accent\"\n                    class=\"back-button\"\n                    md-icon-button>\n                <mat-icon>arrow_back</mat-icon>\n            </button>\n            <img mat-card-image\n                 [src]=\"headerImg\"\n                 alt=\"Product Image\"\n                 class=\"product-image\">\n        </div>\n\n        <section class=\"mat-typography product-head-details\">\n            <h1 [innerText]=\"details.name\"></h1>\n            <h3 [innerText]=\"details.description\"></h3>\n        </section>\n        <mat-divider></mat-divider>\n\n        <div class=\"product-counter\">\n            <div>\n                <section class=\"mat-typography\">\n                    <h1>$ {{ details.price }} </h1>\n                </section>\n            </div>\n\n            <div class=\"quantity-button\">\n                <button\n                    mat-mini-fab\n                    type=\"button\"\n                    [disabled]=\"productQuantity <= 1\"\n                    (click)=\"onReduceQuantity()\"\n                    class=\"bg-button-accent\">-</button>\n                <h2>{{ productQuantity }}</h2>\n                <button\n                    mat-mini-fab\n                    type=\"button\"\n                    (click)=\"onIncreaseQuantity()\"\n                    class=\"bg-button-primary\">+</button>\n            </div>\n        </div>\n\n        <mat-toolbar color=\"basic\" class=\"bg-header\">\n            <section class=\"mat-typography\">\n                <h2>MILK OPTION (REQUIRED)</h2>\n            </section>\n        </mat-toolbar>\n\n        <section class=\"mat-typography error-block\" *ngIf=\"isValidMilkOption\">\n            <mat-error class=\"error-message\">Please select 1 item</mat-error>\n        </section>\n\n        <mat-list role=\"list\">\n            <mat-radio-group\n                class=\"milk-options\"\n                formControlName=\"milkOption\"\n                (change)=\"onCalculate()\">\n                <ng-container *ngFor=\"let milk of milkOptionList\">\n                    <mat-list-item>\n                        <mat-radio-button class=\"milk-radio-button\"\n                                          [value]=\"milk\"\n                                          labelPosition=\"before\">\n                            {{ milk.name }}\n                            <ng-container *ngIf=\"milk.price\">\n                                ({{milk.price | currency:'USD':'symbol':'.0' }})\n                            </ng-container>\n                        </mat-radio-button>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </ng-container>\n            </mat-radio-group>\n        </mat-list>\n\n        <mat-toolbar color=\"basic\">\n            <section class=\"mat-typography syrup-options\">\n                <h2>SYRUP OPTION</h2>\n                <button\n                    mat-button\n                    type=\"button\"\n                    (click)=\"onResetSyrup()\">reset</button>\n            </section>\n        </mat-toolbar>\n\n        <mat-list role=\"list\">\n            <mat-radio-group class=\"syrup-radio-group\"\n                             formControlName=\"syrupOption\"\n                             (change)=\"onCalculate()\">\n                <ng-container *ngFor=\"let syrup of syrupOptionList\">\n                    <mat-list-item>\n                        <mat-radio-button\n                            class=\"syrup-radio-button\"\n                            [value]=\"syrup\"\n                            labelPosition=\"before\">\n                                {{ syrup.name }}\n                            <ng-container *ngIf=\"syrup.price\">\n                                ({{ syrup.price | currency:'USD':'symbol':'.0' }})\n                            </ng-container>\n                        </mat-radio-button>\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </ng-container>\n            </mat-radio-group>\n        </mat-list>\n\n        <mat-toolbar color=\"basic\">\n            <section class=\"mat-typography\">\n                <h2>CHOCOLADE</h2>\n            </section>\n        </mat-toolbar>\n        <mat-list role=\"list\">\n            <mat-selection-list\n                formControlName=\"chocoladeOption\"\n                (selectionChange)=\"onCalculate()\">\n                <mat-list-option *ngFor=\"let chocolade of chocoladeOptionList\"\n                                 [value]=\"chocolade\">\n                    {{ chocolade.name }}\n                    <ng-container *ngIf=\"chocolade.price\">\n                        ({{ chocolade.price | currency:'USD':'symbol':'.0' }})\n                    </ng-container>\n                </mat-list-option>\n            </mat-selection-list>\n        </mat-list>\n\n        <mat-dialog-actions>\n            <button mat-raised-button\n                    color=\"accent\"\n                    type=\"submit\">\n                <div class=\"add-button\">\n                    <mat-icon>shopping_cart</mat-icon>\n                    <span>ADD {{ productQuantity }} TO CART</span>\n                    <span>{{ sum | currency:'USD':'symbol':'.0' }}</span>\n                </div>\n            </button>\n        </mat-dialog-actions>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/products/product.list.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/products/product.list.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var product_service_1 = __webpack_require__(/*! ../../common/services/product.service */ "./src/app/common/services/product.service.ts");
var modal_1 = __webpack_require__(/*! ./edit/modal */ "./src/app/components/products/edit/modal.ts");
/**
 * Product list component
 */
var ProductList = /** @class */ (function () {
    function ProductList(router, route, service, dialog) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.service = service;
        this.dialog = dialog;
        this.productList = [];
        this.columnsToDisplay = ['id', 'name', 'description', 'price'];
        this.getProductList();
        this.route.queryParams
            .pipe(operators_1.first())
            .subscribe(function (params) {
            if (params.id) {
                _this.onEdit(params.id);
            }
        });
    }
    /**
     * get product list
     */
    ProductList.prototype.getProductList = function () {
        var _this = this;
        this.service.getList()
            .pipe(operators_1.first(), operators_1.pluck('products'))
            .subscribe(function (list) {
            _this.productList = list;
        }, function (error) {
            console.error('Issue with getting product list!');
        });
    };
    /**
     * edit product data
     * @param id - product id
     */
    ProductList.prototype.onEdit = function (id) {
        var _this = this;
        this.buildEditModal(id)
            .subscribe(function (updated) {
            if (updated) {
                _this.getProductList();
            }
        });
    };
    /**
     * build modal window for edit product details
     * @param id - product id
     */
    ProductList.prototype.buildEditModal = function (id) {
        var dialogRef;
        var config = new material_1.MatDialogConfig();
        config = {
            data: { id: id },
            panelClass: 'product-details',
            width: '550px',
            height: '650px',
            disableClose: true
        };
        dialogRef = this.dialog.open(modal_1.ProductModal, config);
        this.router.navigate(['/products'], { queryParams: { id: id } });
        return dialogRef.afterClosed();
    };
    ProductList = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./template.html */ "./src/app/components/products/template.html"),
            styles: [__webpack_require__(/*! ./style.scss */ "./src/app/components/products/style.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            product_service_1.ProductService,
            material_1.MatDialog])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;


/***/ }),

/***/ "./src/app/components/products/product.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/products/product.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var product_list_1 = __webpack_require__(/*! ./product.list */ "./src/app/components/products/product.list.ts");
var modal_1 = __webpack_require__(/*! ./edit/modal */ "./src/app/components/products/edit/modal.ts");
/**
 * Product Module
 */
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_list_1.ProductList,
                modal_1.ProductModal
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatTableModule,
                material_1.MatDialogModule,
                material_1.MatIconModule,
                material_1.MatToolbarModule,
                material_1.MatFormFieldModule,
                material_1.MatListModule,
                material_1.MatSelectModule,
                material_1.MatRadioModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            entryComponents: [
                modal_1.ProductModal
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/app/components/products/style.scss":
/*!************************************************!*\
  !*** ./src/app/components/products/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list {\n  width: 100%;\n  height: 50vh; }\n  .product-list .mat-row:hover {\n    cursor: pointer;\n    background-color: #eee; }\n  .product-list .mat-footer-row,\n  .product-list .mat-row:focus {\n    outline: none; }\n  .product-list .mat-sort-header-sorted {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lhcm9zbGF2L0lkZWFQcm9qZWN0cy90ZWNobmljYWwtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFlZjtFQWpCRDtJQUtZLGdCQUFlO0lBQ2YsdUJBQXNCLEVBQ3pCO0VBUFQ7O0lBV1EsY0FBYSxFQUNoQjtFQVpMO0lBZVEsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIC5tYXQtcm93IHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYXQtZm9vdGVyLXJvdyxcbiAgICAubWF0LXJvdzpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/products/template.html":
/*!***************************************************!*\
  !*** ./src/app/components/products/template.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"productList\" class=\"product-list mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef>ID</th>\n        <td mat-cell\n            *matCellDef=\"let product\">{{product.id}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell\n            *matCellDef=\"let product\">{{product.name}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef>Description</th>\n        <td mat-cell\n            *matCellDef=\"let product\">{{product.description}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n        <th mat-header-cell *matHeaderCellDef>Price</th>\n        <td mat-cell\n            *matCellDef=\"let product\">\n            <strong>\n                {{ product.price | currency:'USD':'symbol':'.0' }}\n            </strong>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n\n    <tr mat-row *matRowDef=\"let productData; columns: columnsToDisplay\" (click)=\"onEdit(productData.id)\"></tr>\n\n</table>"

/***/ }),

/***/ "./src/app/template.html":
/*!*******************************!*\
  !*** ./src/app/template.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    API_DATA_URL: './assets/data/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/yaroslav/IdeaProjects/technical-challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map