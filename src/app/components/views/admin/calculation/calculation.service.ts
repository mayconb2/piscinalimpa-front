import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Calculation } from './calculation';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient) { }

  getCalculation(): Observable<Calculation[]> {
    return this.http.get<Calculation[]>(Common.BASE_URL + '/adm/v1/calculation');
  }

  createCalculation(calculation: Calculation): Observable<Calculation> {
    return this.http.post<Calculation>(Common.BASE_URL + '/adm/v1/calculation', calculation);
  } 
}
