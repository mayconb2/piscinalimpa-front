import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Common } from 'src/app/common/common';
import { Formula } from './formula';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success']
    }); 
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
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e => {
        if (e.status == 409) {
          return this.errorHandler(e, 'Ocorreu um erro. Verifique se essa fórmula não é usada em algum cálculo!');
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
