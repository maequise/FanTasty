import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette';
import { Constants } from "../core/Constants";
import { map } from "rxjs/operators";
import { Tag } from '../models/tag';
import { SearchedTag } from '../models/searchedTag';

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
    return this.httpClient.get<Recette>(this.apiServer + '/api/recettes/' + id).pipe(map(response => {
      return response;
    }));
  }

  findByUnivers(universe: string): Observable<Recette[]> {
    return this.httpClient.get<Recette[]>(Constants.URL_BACK + '/api/recettes/univers/' + universe);
  }

  update(recette: Recette | null): void {

    if (recette == null) {
      return;
    }

    this.httpClient.put<Recette>(Constants.URL_BACK + '/api/recettes/' + recette.id, recette).subscribe();
  }

  findByTag(tag: Tag): Observable<Recette[]> {
    console.log(tag);
    let params = new HttpParams().set('tagString', JSON.stringify(tag));
    console.log(params);
    return this.httpClient.get<Recette[]>(Constants.URL_BACK + '/api/recettes/tag/', {
      params: params
    });
  }

  findByTags(tags: SearchedTag): Observable<Recette[]> {
    console.log(tags);
    let params = new HttpParams().set('tagsString', JSON.stringify(tags));
    console.log(params);
    return this.httpClient.get<Recette[]>(Constants.URL_BACK + '/api/recettes/tags/', {
      params: params
    });
  }

  getImage(filename: string): string {
    return Constants.URL_BACK + '/Resources/' + filename;
  }

  recettesCarrousel(): Observable<Recette[]> {
    return this.httpClient.get<Recette[]>(this.apiServer + '/api/recettes/carrousel');
  }
}
