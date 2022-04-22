import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Common.BASE_URL + '/api/v1/product');
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(Common.BASE_URL + '/adm/v1/user', product);
  } 
}
