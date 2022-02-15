import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from '../models/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private apiServer = "http://localhost:60599";
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(ingredient: Ingredient): Observable<Ingredient> {
    return this.httpClient.post<Ingredient>(this.apiServer + '/api/ingredients/', JSON.stringify(ingredient), this.httpOptions)

  }
  findAll(): Observable<Ingredient[]> {
    return this.httpClient.get<Ingredient[]>(this.apiServer + '/api/ingredients');
  }
}


