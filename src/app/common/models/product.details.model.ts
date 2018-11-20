import { ExtrasModel } from './extras.model';

/**
 * Product details model
 */
export interface ProductDetailsModel {
    
    id          : number;
    
    name        : string;
    
    description : string;
    
    price       : number;
    
    before_sale_price : any;
    
    full_description  : string;
    
    order       : number;
    
    category    : object;
    
    images      : object;
    
    extras      : Array<ExtrasModel>;
    
    availability: string;
    
    tags        : Array<any>;
}