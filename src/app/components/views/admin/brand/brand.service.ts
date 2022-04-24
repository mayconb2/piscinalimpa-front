import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Brand } from './brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }) 
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
}
