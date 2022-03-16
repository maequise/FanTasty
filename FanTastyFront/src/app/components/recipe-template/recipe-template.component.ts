import { AfterViewChecked, Component, OnInit, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient';
import { Recette } from '../../models/recette';
import { RecettesService } from '../../services/recettes.service';
import { AuthService } from "../../services/auth.service";
import { Utils } from "../../core/Utils";



@Component({
  selector: 'app-recipe-template',
  templateUrl: './recipe-template.component.html',
  //styleUrls: ['../../../assets/css/recipe-template.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class RecipeTemplateComponent implements OnInit, AfterViewChecked {

  ingredients: Ingredient[] = [new Ingredient()]

  recette: Recette = new Recette();
  urlImage: string = "";

  href: string = '';
  hrefComponent: string = '';

  display: boolean = true;
  userLogged: boolean = false;


  isFromUniverse = true;
  loading: boolean = true;

  optionalClassSpanUtensil: string = '';
  optionalClassSpanToggle: string = '';

  constructor(private render: Renderer2, private router: Router,
    private recettesService: RecettesService, private authService: AuthService) {
  }


  ngOnInit(): void {
    //utensils-light
    this.optionalClassSpanToggle = Utils.isInDarkMode() ? 'toggle-dark' : 'toggle-light';
    this.optionalClassSpanUtensil = Utils.isInDarkMode() ? 'utensils-dark' : 'utensils-light';

    //this.isDarkMode = Utils.isInDarkMode() ? 'Y' : 'N';
    let id = this.router.url.split('/')[3];

    this.recettesService.findById(id).subscribe((response: Recette) => {
      this.recette = response;
      this.urlImage = this.recettesService.getImage(this.recette.photo)
    });

    this.userLogged = this.authService.isUserLogged();

    //add init to remove the light color when entering in the component
    let card = document.querySelector('.recipe-card');
    let body = document.querySelector('body');

    let colorBodyIsDark = body?.classList.contains('dark');

    if (colorBodyIsDark) {
      card?.classList.remove('card-bg');
    } else {
      card?.classList.add('card-bg');
    }

    Utils.loadStyle(this.render, this.router);

    this.recettesService.findById(id).subscribe(response => {

      this.recette = response;
      this.urlImage = this.recettesService.getImage(this.recette.photo)

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
      this.href = '/assets/css/disney.component.css';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.href = '/assets/css/harrypotter.component.css';
    } else if (urlUniverse === '') {
      this.href = '/assets/css/home-light.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.href = '/assets/css/marvel.component.css';
    }

    return this.href;
  }

  showIngredientsUtensils(event: Event): void {
    this.display = !this.display;
    event.stopPropagation();
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.loading = false;
      //this.isDarkMode = Utils.isInDarkMode();
    }, 1500)

  }

}
