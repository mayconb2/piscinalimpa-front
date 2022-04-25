import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Common } from 'src/app/common/common';
import { NewProductSuggestion } from './suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success']
    }); 
  }

  sendToTrello(sugestion: NewProductSuggestion): Observable<string> {
    const url: string = `${Common.BASE_URL}/api/v1/trello`;
    return this.http.post<any>(url, sugestion).pipe(
      map(obj => obj),
      catchError(e => {
          console.log(e)
          return this.errorHandler(e, 'Ocorreu um erro. Por favor tente mais!');
      })
    );
  }

  errorHandler(e: any, text: string): Observable<any> {
    this.showMessage(text, true)
    return EMPTY;
  }
  
}
