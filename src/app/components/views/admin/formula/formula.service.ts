import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Formula } from './formula';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http: HttpClient) { }

  getFormulas(): Observable<Formula[]> {
    return this.http.get<Formula[]>(Common.BASE_URL + '/adm/v1/formula');
  }

  createFormula(formula: Formula): Observable<Formula> {
    return this.http.post<Formula>(Common.BASE_URL + '/adm/v1/formula', formula);
  } 
}
