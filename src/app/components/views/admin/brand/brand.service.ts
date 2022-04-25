import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Common } from 'src/app/common/common';
import { Brand } from './brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success']
    }); 
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(Common.BASE_URL + '/adm/v1/brand');
  }

  createBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(Common.BASE_URL + '/adm/v1/brand', brand);
  }
  
  getById(id: string): Observable<Brand> {
    const url: string = `${Common.BASE_URL}/adm/v1/brand/${id}`;
    return this.http.get<Brand>(url)
  }

  update(brand: Brand): Observable<Brand> {
    const url = `${Common.BASE_URL}/adm/v1/brand/${brand.id}`;
    return this.http.put<Brand>(url, brand)
  }

  delete(id: string) {
    const url = `${Common.BASE_URL}/adm/v1/brand/${id}`;
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e => {
        if (e.status == 409) {
          return this.errorHandler(e, 'Ocorreu um erro. Verifique se essa marca não é usada em algum produto!');
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
