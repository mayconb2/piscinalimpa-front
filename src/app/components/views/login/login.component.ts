import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/common/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth: AuthService) { }
  
  ngOnInit(): void {
  
  }
  form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    this.login('mayconb2', '123456')
  }

  login(login: string, password: string) {
    this.auth.authenticate(login, password)
    .subscribe(xunda => {
      console.log(xunda)
    }, err => {
      console.log(err);
      this.form.reset();
    });
  }

}
