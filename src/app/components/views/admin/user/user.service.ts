import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { User } from './user';

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
}
