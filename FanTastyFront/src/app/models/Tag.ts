export class Tag {
  public typePlat: string;
  public difficulte: number;
  public cout: number;
  public saison: string;


  constructor(typePlat: string = "", difficulte: string = "", cout: string = "", saison: string = "") {
    this.typePlat = typePlat;
    this.difficulte = parseInt(difficulte) ;
    this.cout = parseInt(cout);
    this.saison = saison;
  }
}