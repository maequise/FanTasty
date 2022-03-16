import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RecettesService} from "../../services/recettes.service";
import {Recette} from "../../models/recette";

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.css']
})
export class MongoComponent implements OnInit {
  formMongo: FormGroup = this.fb.group({
    universe: [],
    recette: Recette,
    image: [],
    file: [],
    name: []
  });

  recettes: Recette[] = [];

  selected: Recette | null = null;


  constructor(private fb: FormBuilder, private recetteService: RecettesService) { }

  ngOnInit(): void {
    this.formMongo.valueChanges.subscribe(form => {
    });
  }

  submit(): void {
    console.log(this.selected);

    let universe : string = this.formMongo.get('universe')?.value;
    let newImg : string = universe+'/'+this.formMongo.get('file')?.value.split('\\')[2];

    if(newImg != null){
      this.selected!.photo = newImg;
    }

    this.selected!.nom = this.formMongo.get('name')?.value;

    console.log(this.selected);

    this.recetteService.update(this.selected);

    this.formMongo = this.fb.group({universe: [],
      recette: Recette,
      image: [],
      file: [],
      name: []});

    this.selected = null;
  }

  onChange(universe: string){
    this.recetteService.findByUnivers(universe).subscribe(response => this.recettes = response);
  }

  setRecette(){
    this.selected = this.formMongo.get('recette')?.value;
  }

  setNewPhoto() {
  }
}
