import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth/auth.service';
import { TokenService } from 'src/app/common/token/token.service';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService, 
              private router: Router, 
              private tokenService: TokenService,
              private snackBar: MatSnackBar,
              private headerService: HeaderService) {

    headerService.hheaderTitle = {
      title: 'Login'
    }
}
  
  ngOnInit(): void {
  
  }
  form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    const login = this.form.get('login')?.value;
    const password = this.form.get('password')?.value;

    this.login(login, password)
  }

  login(login: string, password: string) {
    this.auth.authenticate(login, password)
    .subscribe(token => {
      this.tokenService.setToken(token);
      this.router.navigate(['/admin']);
      
    }, err => {
      this.showMessage('Usuário ou senha inválidos!')
      this.form.reset();
    });
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 5500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['msg-error']
    });
} 

}
