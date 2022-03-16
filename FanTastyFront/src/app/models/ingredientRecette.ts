import { Ingredient } from "./ingredient";

export class IngredientRecette {
  public id: string;
  public quantite: number;
  public unite: string;
  public ingredient: Ingredient;


  constructor(id: string = "", quantite: number = 0, unite: string = "", ingredient: Ingredient = new Ingredient()) {
    this.id = id;
    this.quantite = quantite;
    this.unite = unite;
    this.ingredient = ingredient;
  }
}
