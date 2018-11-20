import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductList } from './components/products/product.list';
import { ProductModal } from './components/products/edit/modal';

const routes: Routes = [
    {
        path      : 'products',
        component : ProductList
    },
    {
        path      : 'products/:id',
        component : ProductModal
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}