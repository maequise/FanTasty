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
    console.log('check login');

    console.log(this.authService.currentUserValue);


    if(this.authService.currentUserValue != null && this.authService.currentUserValue.token) {
      //this.router.navigate(['/admin']);

      console.log('in condition')

      return true;
    }

    this.router.navigate(['/admin/login'])

    return false;
  }

}
