import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Login} from "../../models/Login";
import {ActivatedRoute, Router, RouterState} from "@angular/router";
import {HttpRequest} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.formBuilder.group({
    username: [],
    password: []
  });

  userLogged: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.userLogged = this.authService.isUserLogged();
  }

  login() : void {
    let user : Login = new Login(this.formLogin.get('username')?.value, this.formLogin.get('password')?.value);

    this.authService.loginBis(user).subscribe(result => {
      console.log(result);
      if(result){
        this.router.navigate(['/user/login']);
      }
    });
  }

  logout() : void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
