import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette';
import {Constants} from "../core/Constants";

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  private apiServer = "http://localhost:60599";
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  create(recette: Recette): Observable<Recette> {
    return this.httpClient.post<Recette>(this.apiServer + '/api/recette/', JSON.stringify(recette), this.httpOptions)

  }
  findAll(): Observable<Recette[]> {
    return this.httpClient.get<Recette[]>(this.apiServer + '/api/recettes');
  }
  findById(id: string): Observable<Recette> {
    return this.httpClient.get<Recette>(this.apiServer + '/api/recettes/' + id);
  }

  findByUnivers(universe: string) : Observable<Recette[]> {
    return this.httpClient.get<Recette[]>(Constants.URL_BACK + '/api/recettes/univers/' + universe);
  }

  update(recette: Recette | null) : void {

    if(recette == null){
      return;
    }

    this.httpClient.put<Recette>(Constants.URL_BACK + '/api/recettes/'+recette.id, recette).subscribe();
  }
}
