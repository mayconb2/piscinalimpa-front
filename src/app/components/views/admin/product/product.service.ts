import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Common } from 'src/app/common/common';
import { Product } from './product';
import { ProductDto } from './product-create/ProductDto';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success']
    }); 
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
    return this.http.put<ProductDto>(url, product)
  }

  delete(id: string) {
    const url = `${Common.BASE_URL}/adm/v1/product/${id}`;
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e => {
        if (e.status == 409) {
          return this.errorHandler(e, 'Ocorreu um erro. Verifique se esse produto não é usada em nenhuma marca ou cálculo!');
        } else {
          return this.errorHandler(e, 'Ocorreu um erro. Tente novamente mais tarde');
        }
      })
    );
  }

  errorHandler(e: any, text: string): Observable<any> {
    this.showMessage(text, true)
    return EMPTY;
  }

}
