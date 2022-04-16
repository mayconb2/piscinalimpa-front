import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth/auth.service';
import { TokenService } from 'src/app/common/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router, private tokenService: TokenService) { }
  
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
      console.log(token)
      this.tokenService.setToken(token);
      this.router.navigate(['/admin']);
      
    }, err => {
      console.log(err);
      this.form.reset();
    });
  }

}
