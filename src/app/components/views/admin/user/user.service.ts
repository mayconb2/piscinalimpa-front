import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { User } from './user';
import { UserForm } from './user-update/userForm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }) 
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

  verifyIfOldPasswordMatch(oldPassword: string): Observable<Boolean> {
    const url = `${Common.BASE_URL}/adm/v1/user/verify-old-password/1`;
    return this.http.post<Boolean>(url, {password: oldPassword})
  }
}
