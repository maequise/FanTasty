import {Ingredient} from "./ingredient";

export class IngredientRecette {
  public id: string;
  public quantite: number;
  public unite: string;
  public ingredient: Ingredient;


  constructor(id: string, quantite: number, unite: string, ingredient: Ingredient) {
    this.id = id;
    this.quantite = quantite;
    this.unite = unite;
    this.ingredient = ingredient;
  }
}
