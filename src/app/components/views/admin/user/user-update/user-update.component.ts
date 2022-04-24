import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserForm } from './userForm';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userToUpdate: User = {
    login: '',
    password: '',
    type: 'ADMIN'
  }

  userForm: UserForm = {
    login: '',
    newPassword: '',
    oldPassword: ''
  }

  newPassword: any = {
    newPassword1: '',
    newPassword2: ''
  }

  constructor(private userService: UserService, 
              private router: Router, 
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')!;
    this.userService.getById(id)
      .subscribe(user => {
        this.userToUpdate = user;
      })
  }

  update(): void {

    if(!this.userService.verifyIfNewPasswordsMatch(this.newPassword.newPassword1, this.newPassword.newPassword2)) {
      this.userService.showMessage('Senha nova deve ser igual');
      return;
    }

    this.userForm.id = this.userToUpdate.id;
    this.userForm.login = this.userToUpdate.login;
    this.userForm.newPassword = this.newPassword.newPassword1;
    this.userForm.oldPassword = this.userToUpdate.password!;

    this.userService.update(this.userForm)
      .subscribe(user => {
        this.userService.showMessage('Usuário atualizado com sucesso!');
        this.router.navigate(['', { outlets: { admin: ['user'] } }]);
      })
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['user'] } }]);
  }



}
