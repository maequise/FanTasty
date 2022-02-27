export class Tag {
  public TypePlat: string;
  public Difficulte: number;
  public Cout: number;
  public Saison: string;


  constructor(typePlat: string = "", difficulte: string = "", cout: string = "", saison: string = "") {
    this.TypePlat = typePlat;
    this.Difficulte = parseInt(difficulte) ;
    this.Cout = parseInt(cout);
    this.Saison = saison;
  }
}
