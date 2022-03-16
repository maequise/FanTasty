import { Injectable } from '@angular/core';
import {Utilisateur} from "../models/utilisateur";
import {Recette} from "../models/recette";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../core/Constants";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

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

  create(user: Utilisateur) : void {
    let objToSend: JsonObject = JSON.parse(JSON.stringify(user));

    objToSend.motDePasse = user.password;
    delete objToSend._token;
    delete objToSend._password;

    console.log(objToSend);

    this.httpClient.post<Utilisateur>(Constants.URL_BACK + '/api/utilisateurs', objToSend).subscribe(response => console.log(response));
  }
}
