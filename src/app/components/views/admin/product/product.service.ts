import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Product } from './product';
import { ProductDto } from './product-create/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }) 
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Common.BASE_URL + '/api/v1/product');
  }

  createProduct(product: ProductDto): Observable<Product> {
    return this.http.post<Product>(Common.BASE_URL + '/adm/v1/product', product);
  }

  getById(id: string): Observable<Product> {
    const url: string = `${Common.BASE_URL}/adm/v1/product/${id}`;
    return this.http.get<Product>(url)
  }

  update(product: ProductDto): Observable<ProductDto> {
    const url = `${Common.BASE_URL}/adm/v1/product/${product.id}`;
    console.log(url)
    return this.http.put<ProductDto>(url, product)
  }

}
