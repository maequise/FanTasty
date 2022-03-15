export class SearchedTag {
    public typePlat: string[] = [];
    public difficulte: number[] = [];
    public cout: number[] = [];
    public saison: string[] = [];
  
  
    constructor(typePlat: string[] = [], difficulte: string[] = [], cout: string[] = [], saison: string[] = []) {
      this.typePlat = typePlat;
      this.difficulte = difficulte.map(d=>parseInt(d));
      this.cout = cout.map(c=>parseInt(c));
      this.saison = saison;
    }
  }
