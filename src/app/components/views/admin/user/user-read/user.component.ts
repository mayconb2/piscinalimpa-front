import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteComponent } from 'src/app/components/template/dialog/confirm-delete/confirm-delete.component';
import { User } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allUsers: User[] = [];
  displayedColumns = ['id', 'login', 'action'];

  constructor(private userService: UserService, 
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.allUsers = users;
      });
  }

  navigateToCreateUser(): void {
    this.router.navigate([{ outlets: { admin: [ 'user-create'] }}]);
  }

  confirmDeletion(id: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '450px',
      data: {
        textDeleteConfirm: "Tem certeza que deseja deletar este usuário?"
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.userService.delete(id).subscribe(() => {
          
          this.userService.getUsers()
          .subscribe(users => {
            this.allUsers = users;
          });

          this.userService.showMessage('Usuário deletado com sucesso!');

        });
      }
    });
  }

}
