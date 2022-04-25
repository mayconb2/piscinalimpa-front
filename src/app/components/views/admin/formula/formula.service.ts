import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Formula } from './formula';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }) 
  }

  getFormulas(): Observable<Formula[]> {
    return this.http.get<Formula[]>(Common.BASE_URL + '/adm/v1/formula');
  }

  createFormula(formula: Formula): Observable<Formula> {
    return this.http.post<Formula>(Common.BASE_URL + '/adm/v1/formula', formula);
  }

  getById(id: string): Observable<Formula> {
    const url: string = `${Common.BASE_URL}/adm/v1/formula/${id}`;
    return this.http.get<Formula>(url)
  }

  update(formula: Formula): Observable<Formula> {
    const url = `${Common.BASE_URL}/adm/v1/formula/${formula.id}`;
    return this.http.put<Formula>(url, formula)
  }

  delete(id: string) {
    const url = `${Common.BASE_URL}/adm/v1/formula/${id}`;
    return this.http.delete(url);
  }
}
