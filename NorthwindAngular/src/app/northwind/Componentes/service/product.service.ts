import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../model/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endPoint : string = 'Product';

  constructor(private http : HttpClient) { }

  addProduct(requestProduct: Product):Observable<any>{
    let url=environment.apiNorthwind + this.endPoint;
    return this.http.post(url,requestProduct);
  }
  getProduct():Observable<Array<Product>>{
    let url = environment.apiNorthwind + this.endPoint;
    return this.http.get<Array<Product>>(url);
  }
}
