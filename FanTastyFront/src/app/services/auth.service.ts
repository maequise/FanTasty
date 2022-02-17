import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, pipe, Subject} from "rxjs";
import {Constants} from "../core/Constants";
import {Login} from "../models/Login";
import {Utilisateur} from "../models/utilisateur";
import {delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;

  redirectUrl: string | null = null;

  private static result = new Subject<boolean>();

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  }

  private static _isLogged: boolean;


  static get isLogged(): boolean {
    return this._isLogged;
  }

  constructor(private httpClient: HttpClient) {
  }

  login(user: Login): Observable<boolean> {
    AuthService.result.next(this.isLogged);

    this.httpClient.post<Login>(Constants.URL_BACK + '/api/utilisateurs/login/', user).subscribe({
        next(response) {
          let userFound: Utilisateur = <Utilisateur><any>response;

          console.log(userFound);

          if (response != null && userFound.roles != null && userFound.roles.length >= 1) {
            if (userFound.roles.includes('admin')) {
              console.log('roles founds !');
              AuthService._isLogged = true;
            }

            AuthService._isLogged = true;

            AuthService.result.next(AuthService._isLogged);
          }
        },
        error(err) {
        },
        complete() {
          console.log('complete !')
        }
      },
    );

    return AuthService.result.asObservable();
  }
}
