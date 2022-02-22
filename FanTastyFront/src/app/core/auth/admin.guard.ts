import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {Utilisateur} from "../../models/utilisateur";
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  userAdmin : Utilisateur | null = null;

  constructor(private authService : AuthService, private router : Router) {
    this.userAdmin = this.authService.currentUserValue;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdminUser() != undefined && <boolean> this.isAdminUser();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  private isAdminUser() : boolean | undefined {
    return this.userAdmin?.roles.includes('admin');
  }

}
