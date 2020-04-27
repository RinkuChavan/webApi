import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiRootUri: string = 'https://localhost:44322/api/products';
  constructor(private httpClient: HttpClient) { }
  
  getAllProducts(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.apiRootUri);
  }

  deleteProducts(Id)
  {
    alert(Id);
    return this.httpClient.delete(this.apiRootUri+'/'+ Id);
  }

  addProduct(product)
  {
    console.log('hi');
    console.log(product);
    console.log(product.productId);
    return this.httpClient.delete(this.apiRootUri+'/'+ product.productId);
    //return this.httpClient.put(this.apiRootUri+'/rinku/'+ product.productId,product);
  }

  // getProductsByFilter(): Observable<ProductModel[]> {
  //   return this.httpClient.get<ProductModel[]>(this.apiRootUri + '?$filter=brand%20eq%20%27Encore%20Software%27');
  // }

 
}
