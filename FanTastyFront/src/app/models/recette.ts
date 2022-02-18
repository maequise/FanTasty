import { IngredientRecette } from "./ingredientRecette";
import { Temps } from "./Temps";
import { Tag } from "./Tag";

export class Recette {
  public id: string;
  public nom: string;
  public auteur: string;
  public univers: string;
  public ustensiles: string[];
  public etapes: string[];
  public ingredients: IngredientRecette[];
  public nombrePersonnes: number;
  public temps: Temps;
  public tags: Tag;
  public photo: string;


  constructor(id: string = "", nom: string = "", auteur: string = "", univers: string = "", ustensiles: string[] = [], etapes: string[] = [],
    ingredients: IngredientRecette[] = [], nombrePersonnes: number = 0, temps: Temps = new Temps(), tags: Tag = new Tag(), photo: string = "") {
    this.id = id;
    this.nom = nom;
    this.auteur = auteur;
    this.univers = univers;
    this.ustensiles = ustensiles;
    this.etapes = etapes;
    this.ingredients = ingredients;
    this.nombrePersonnes = nombrePersonnes;
    this.temps = temps;
    this.tags = tags;
    this.photo = photo;
  }
}
