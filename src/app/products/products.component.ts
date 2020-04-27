import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts()
    .subscribe(_products_ => this.products = _products_);

    this.productService.getAllProducts();
}

  onDelete(Id:number)
  {
    console.log(Id);
    this.productService.deleteProducts(Id)
    .subscribe(_products_ => this.productService.getAllProducts());
    
  }

  // updateMovie(movieId) {
  //   this.productService.updateMovie(Id, this.movieName, this.rating, this.genre)
  //         .subscribe(data=>{
  //   alert("updated"+data.movieId);
  //   this.router.navigate(['/movies']); 
  //         });
  //     }
    



  // deduplicateArray(_products_: ProductModel[]) {
  //   let _unique_products_ = _products_.reduce((uniqueArray, newProduct) => {
  //     if (!uniqueArray.find(currentProduct => currentProduct.title === newProduct.title)) {
  //       uniqueArray.push(newProduct);
  //     }
  //     return uniqueArray;
  //   }, []);

  //   return _unique_products_;
  }



