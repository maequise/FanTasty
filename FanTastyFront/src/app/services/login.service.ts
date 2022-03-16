import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../core/Constants";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) : Observable<any> {
    return this.httpClient.post(Constants.URL_BACK + '/api/utilisateurs/login', {email: email, password: password});
  }
}
