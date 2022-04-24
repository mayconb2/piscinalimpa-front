import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Calculation } from './calculation';
import { CalculationDto } from './calculationDto';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }) 
  }

  getCalculation(): Observable<Calculation[]> {
    return this.http.get<Calculation[]>(Common.BASE_URL + '/adm/v1/calculation');
  }

  createCalculation(calculation: CalculationDto): Observable<Calculation> {
    return this.http.post<Calculation>(Common.BASE_URL + '/adm/v1/calculation', calculation);
  } 

  getById(id: string): Observable<Calculation> {
    const url: string = `${Common.BASE_URL}/adm/v1/calculation/${id}`;
    return this.http.get<Calculation>(url)
  }

  update(product: CalculationDto): Observable<CalculationDto> {
    const url = `${Common.BASE_URL}/adm/v1/calculation/${product.id}`;
    return this.http.put<CalculationDto>(url, product)
  }
}
