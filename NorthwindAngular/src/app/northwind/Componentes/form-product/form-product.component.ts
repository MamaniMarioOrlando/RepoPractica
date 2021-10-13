import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Product } from '../model/product';

import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  public formProduct: FormGroup;

  constructor(private formBuilder:FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
    this.onInit();
  }
  onInit(){
    this.formProduct=this.formBuilder.group({
      nameProduct:["",[Validators.required,Validators.maxLength(40)]],
      cantidadPorUnidad:["",[Validators.required,Validators.maxLength(40)]]
    });
  }

  guardarProducto(){
    let product = new Product();
    product.nameProduct = this.formProduct.get("nameProduct").value; 
    product.cantidadPorUnidad = this.formProduct.get("cantidadPorUnidad").value;
    
    this.productService.addProduct(product);

    console.log("se agrego un producto");

  }

  cancelarFormulario(){
    this.formProduct.reset();
    console.log("selecciono cancelar");
  }

  get f(){
    return this.formProduct.controls;
  }
}
