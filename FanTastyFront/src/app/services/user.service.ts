import { Injectable } from '@angular/core';
import {Utilisateur} from "../models/utilisateur";
import {Recette} from "../models/recette";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../core/Constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addFavoriteRecipe(user: Utilisateur, recipe: Recette) : Observable<any> | null {
    this.httpClient.put(Constants.URL_BACK + '/api/utilisateurs/'+user.id+'/'+recipe.id,null)
      .subscribe((response : any) => console.log(response));
    return null;
  }
}
