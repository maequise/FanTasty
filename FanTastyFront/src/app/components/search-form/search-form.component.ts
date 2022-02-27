import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recette } from 'src/app/models/recette';
import { Tag } from 'src/app/models/Tag';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['../../../assets/css/home-light.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup

  lstSaison: string[] = ["Printemps", "Ete", "Automne", "Hiver", "Toutes"]

  lstTypePlat: { [key: string]: string } = {
    "Entree": "Entree",
    "Plat": "Plat",
    "Dessert": "Dessert",
    "": "Tous"
  }

  lstCout: { [key: number]: string } = {
    1: "Bon marché",
    2: "Faible",
    3: "Modéré",
    4: "Assez cher",
    0: "Tous"
  }

  lstDifficulte: { [key: number]: string } = {
    1: "Très facile",
    2: "Facile",
    3: "Moyen",
    4: "Difficile",
    0: "Tous"
  }

  recettes: Recette[] = [];

  constructor(private fb: FormBuilder, private recetteService: RecettesService) {
    this.searchForm = this.fb.group({
      nom: "",
      difficulte: 0,
      saison: "",
      cout: 0,
      typePlat: ""
    })
  }

  ngOnInit(): void {
  }

  btnClickSearch() {
    let val = this.searchForm.value;
    let tag: Tag = new Tag(val.typePlat, val.difficulte, val.cout, val.saison)
    this.recetteService.findByTag(tag).subscribe(
      response => {
        this.recettes = response;
        console.log(this.recettes);
      }
    );
  }

  btnClickReset(){
    this.searchForm = this.fb.group({
      nom: "",
      difficulte: 0,
      saison: "",
      cout: 0,
      typePlat: ""
    })
  }
}

