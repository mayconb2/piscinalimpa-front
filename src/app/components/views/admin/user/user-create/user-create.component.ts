import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    login: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['user'] } }])
  }

  createUser() {
    this.userService.createUser(this.user)
      .subscribe(() => {
        this.userService.showMessage('Usuário criado!');
        this.router.navigate(['', { outlets: { admin: ['user'] } }])
      });
  }

}
