import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../../services/login.service";
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin('');
  }

  private checkLogin(url: string) : boolean {
    console.log('in guard chek login')
    if(AuthService.isLogged) {
      return true;
    }

    console.log('check auth service');
    console.log(this.authService.isLogged);

    this.router.navigate(['/admin/login'])

    return false;
  }

}
