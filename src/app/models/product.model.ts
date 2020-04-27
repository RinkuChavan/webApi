export class ProductModel
{
    productId:number;
    description:string;
    price:string;
    productTitle:string;
    typeId:number;
    type:ProductType;   

}

export class ProductType
{
    typeId:number;
    type:string;
}
