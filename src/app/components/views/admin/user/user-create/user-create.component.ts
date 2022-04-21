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

  createUser() {
    console.log(this.user)
    this.userService.createUser(this.user)
      .subscribe(() => {
        console.log('substituir por msg de criado com snack bar');
      });
    this.router.navigate([{ outlets: { admin: [ 'user'] }}])
  }

}
