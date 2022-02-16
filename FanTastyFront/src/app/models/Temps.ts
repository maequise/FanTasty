export class Temps {
  public tempsPreparation: string;
  public tempsCuisson: string;
  public tempsTotal: string;


  constructor(tempsPreparation: string, tempsCuisson: string, tempsTotal: string) {
    this.tempsPreparation = tempsPreparation;
    this.tempsCuisson = tempsCuisson;
    this.tempsTotal = tempsTotal;
  }
}
