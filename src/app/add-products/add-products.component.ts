import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
//import { ProductModel } from '../models/product.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

 // products: ProductModel[];
  productDetail:any;
  AddForm = new FormGroup({
    productId: new FormControl(''),
    productTitle:new FormControl(''),
    price:new FormControl(''),
    description:new FormControl(''),
    // ProductType:new FormGroup({
      typeId:new FormControl(''),
      type:new FormControl('')
    // })

  });
  constructor(private productService: ProductsService) { }

  ngOnInit() {


  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.AddForm.value);
    this.productService.addProduct(this.AddForm.value);
      // profileForm = new FormGroup({
      // firstName: new FormControl(''),
      // lastName: new FormControl(''),
    //});
  }

  
   
    // this.products=product;
    // console.log(this.products);
    // this.productService.addProduct(product).subscribe();

  
}
