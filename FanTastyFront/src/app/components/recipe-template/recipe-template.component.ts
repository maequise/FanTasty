import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient';
import { Recette } from '../../models/recette';
import { RecettesService } from '../../services/recettes.service';



@Component({
  selector: 'app-recipe-template',
  templateUrl: './recipe-template.component.html',
  styleUrls: ['../../../assets/css/recipe-template.component.css'],
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

  href: string = '/assets/css/marvel.component.css';

  constructor(private render: Renderer2, private router: Router, public recettesService: RecettesService) {


  }

  ngOnInit(): void {
    let tag = this.render.createElement('link');
    this.href = this.getStyleHeader();

    this.render.setProperty(tag, 'rel', 'stylesheet');
    this.render.setProperty(tag, 'href', this.href);
    this.render.appendChild(document.querySelector('head'), tag);

    let id = this.router.url.split('/')[3];

    this.recettesService.findById(id).subscribe(response => {

      this.recette = response;

      console.log(response);
    });

  }

  btnClickHome() {
    this.router.navigate(['']);
  }

  getStyleHeader(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.href = '/assets/css/naruto.component.css';
    } else if (urlUniverse.startsWith('/disney')) {
      this.href = '~/assets/css/disney.component.css';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.href = '/assets/css/harrypotter.component.css';
    } else if (urlUniverse === '') {
      this.href = '/assets/css/home-light.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.href = '/assets/css/marvel.component.css';
    }

    console.log(this.href);

    return this.href;
  }

}