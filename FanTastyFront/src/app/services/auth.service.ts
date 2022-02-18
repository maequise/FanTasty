import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Constants} from "../core/Constants";
import {Login} from "../models/Login";
import {Utilisateur} from "../models/utilisateur";
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;

  redirectUrl: string | null = null;

  private result = new Subject<boolean>();

  private currentUser: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.currentUser = new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")!));
    if(this.currentUser.value){
      this.isLogged = true;
    }
  }

  public get currentUserValue(){
    return this.currentUser.value;
  }

  loginBis(user: Login): Observable<any> {
    this.result.next(this.isLogged);

    // @ts-ignore
    return this.httpClient.post<Login>(Constants.URL_BACK + '/api/utilisateurs/login/', user).pipe(map(response => {
      let userFound: Utilisateur = <Utilisateur><any>response;

      if (response != null && userFound.roles != null && userFound.roles.length >= 1) {
        if (userFound.roles.includes('admin')) {
          this.isLogged = true;

          this.result.next(this.isLogged);

          userFound.token = 'current_token';

          localStorage.setItem("user", JSON.stringify(userFound));

          return this.isLogged;
        }
      }
    }));
  }
}