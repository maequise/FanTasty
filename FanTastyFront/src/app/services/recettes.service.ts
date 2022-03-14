import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette';
import {Constants} from "../core/Constants";
import { Tag } from '../models/Tag';

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

  findByTag(tag : Tag) : Observable<Recette[]>{
    console.log(tag);
    let params = new HttpParams().set('tagString', JSON.stringify(tag));
    console.log(params);
    return this.httpClient.get<Recette[]>(Constants.URL_BACK + '/api/recettes/tag/', {
      params: params
    });
  }

  getImage(filename : string) : string{
    return Constants.URL_BACK + '/Resources/' + filename;
  }
}
