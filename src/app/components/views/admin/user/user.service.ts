import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Common } from 'src/app/common/common';
import { User } from './user';
import { UserForm } from './user-update/userForm';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success']
    }); 
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(Common.BASE_URL + '/adm/v1/user');
  }

  createUser(user: User): Observable<User> {
    user.type = 'ADMIN';
    return this.http.post<User>(Common.BASE_URL + '/adm/v1/user', user);
  }

  getById(id: string): Observable<User> {
    const url: string = `${Common.BASE_URL}/adm/v1/user/${id}`;
    return this.http.get<User>(url)
  }

  update(user: UserForm): Observable<User> {
    const url = `${Common.BASE_URL}/adm/v1/user/${user.id}`;
    return this.http.put<User>(url, user)
  }

  verifyIfNewPasswordsMatch(password1: string, password2: string): boolean {
    return password1 === password2;
  }

  delete(id: string) {
    const url = `${Common.BASE_URL}/adm/v1/user/${id}`;
    return this.http.delete(url).pipe(
      map(obj => obj),
      catchError(e => {
        if (e.status == 409) {
          return this.errorHandler(e, 'Ocorreu um erro. Veja se esse usuário não é usado em outro lugar!');
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
