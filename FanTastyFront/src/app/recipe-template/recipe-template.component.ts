import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../models/ingredient';
import { IngredientsService } from '../services/ingredients.service';
import { Recette } from '../models/recette';
import { RecettesService } from '../services/recettes.service';



@Component({
  selector: 'app-recipe-template',
  templateUrl: './recipe-template.component.html',
  styleUrls: ['./recipe-template.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class RecipeTemplateComponent implements OnInit {

  ingredients: Ingredient[] = [
    {
      id: '',
      nom: '',
      image: ''
    },
  ];

  recette!: Recette;

  constructor(private router: Router, public recettesService: RecettesService) {
    console.log(router)
  }

  ngOnInit(): void {
    /*let id = this.router.url.split('/')[2];*/

    this.recettesService.findById('620b7122fe453321ca04691e').subscribe(response => {

      this.recette = response;

      console.log(this.recette);
    });

  }

  btnClickHome() {
    this.router.navigate(['']);
  }

}
