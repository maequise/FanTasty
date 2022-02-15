export class Recette {
    public id: string;
    public nom: string;
    public auteur: string;
    public univers: string;
    public ustensiles: string[];
    public etapes: string[];

    constructor(id: string, nom: string, auteur: string, univers: string, ustensiles: string[], etapes: string[]) {
        this.id = id;
        this.nom = nom;
        this.auteur = auteur;
        this.univers = univers;
        this.ustensiles = ustensiles;
        this.etapes = etapes;
    }
}