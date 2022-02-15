export class Ingredient {
    public id: string;
    public nom: string;
    public image: string;

    constructor(id: string, nom: string, image: string) {
        this.id = id;
        this.nom = nom;
        this.image = image;
    }
}