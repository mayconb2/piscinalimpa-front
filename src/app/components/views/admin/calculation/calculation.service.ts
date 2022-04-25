import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Common } from 'src/app/common/common';
import { Calculation } from './calculation';
import { CalculationDto } from './calculationDto';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success']
    }); 
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

  delete(id: string) {
    const url = `${Common.BASE_URL}/adm/v1/calculation/${id}`;
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e => {
        if (e.status == 409) {
          return this.errorHandler(e, 'Ocorreu um erro. Verifique se esse cálculo não é usada em nenhuma lugar!');
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
