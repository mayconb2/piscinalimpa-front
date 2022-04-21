import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allUsers: User[] = [];
  displayedColumns = ['id', 'login', 'action'];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.allUsers = users;
      });
  }

  navigateToCreateUser(): void {
    this.router.navigate([{ outlets: { admin: [ 'user-create'] }}]);
  }

}
