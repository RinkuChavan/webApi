import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product: ProductModel;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private productService: ProductsService) { }

  ngOnInit() {
  //   let productId = localStorage.getItem("editUserId");
  //   if(!userId) {
  //     alert("Invalid action.")
  //     this.router.navigate(['list-user']);
  //     return;
  //   }
  //   this.editForm = this.formBuilder.group({
  //     id: [],
  //     email: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required]
  //   });
  //   this.userService.getUserById(+userId)
  //     .subscribe( data => {
  //       this.editForm.setValue(data);
  //     });
  // }

  // onSubmit() {
  //   this.userService.updateUser(this.editForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['list-user']);
  //       },
  //       error => {
  //         alert(error);
  //       });
  // }

}


}
