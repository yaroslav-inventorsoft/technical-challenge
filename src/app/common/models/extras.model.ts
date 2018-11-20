import { ExtrasItemModel } from './extras.item.model';

/**
 * Extras model
 */
export interface ExtrasModel {
    
    id    : number;
    
    name  : string;
    
    min   : number;
    
    max   : number;
    
    items : Array<ExtrasItemModel>;
}