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

  personneVoulu: number = 1;

  saisonIcon: string = "";

  difficulteIcon: string = "";

  budgetIcon: string = "";

  plusIcon: string = "";

  moinsIcon: string = "";

  href: string = '/assets/css/marvel.component.css';

  constructor(private render: Renderer2, private router: Router, public recettesService: RecettesService) {


  }

  ngOnInit(): void {
    //add init to remove the light color when entering in the component
    let card = document.querySelector('.recipe-card');
    let body = document.querySelector('body');

    let colorBodyIsDark = body?.classList.contains('dark');

    if (colorBodyIsDark) {
      card?.classList.remove('card-bg');
    } else {
      card?.classList.add('card-bg');
    }

    let tag = this.render.createElement('link');
    this.href = this.getStyleHeader();

    this.render.setProperty(tag, 'rel', 'stylesheet');
    this.render.setProperty(tag, 'href', this.href);
    this.render.appendChild(document.querySelector('head'), tag);

    let id = this.router.url.split('/')[3];

    this.recettesService.findById(id).subscribe(response => {

      this.recette = response;

      this.personneVoulu =  this.recette.nombrePersonnes;

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
      this.href = '/assets/css/disney.component.css';
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


  btnIncrementationNbrIngredient() {
    this.personneVoulu++;
    if(this.personneVoulu >= 50){
      this.personneVoulu = 50;
    }
    return this.personneVoulu;
  }

  btnDecrementationNbrIngredient(){
    if(this.personneVoulu <= 1){
      this.personneVoulu = 1;
    }else{
      this.personneVoulu--;
    }

    return this.personneVoulu;
  }

  iconTableau(i: number){
    return new Array(i);
  }

  iconDifficulte(): string {

    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.difficulteIcon = "../../assets/chef-naruto.png";
    } else if (urlUniverse.startsWith('/disney')) {
      this.difficulteIcon = "../../assets/chef-disney.png";
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.difficulteIcon = "../../assets/chef-harry.png";
    } else if (urlUniverse === '') {
      this.href = '/assets/css/home-light.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.difficulteIcon = "../../assets/chef-marvel.png";
    }

    return this.difficulteIcon;
  }

  iconBudget(): string {

    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.budgetIcon = "../../assets/piece-naruto.png";
    } else if (urlUniverse.startsWith('/disney')) {
      this.budgetIcon = "../../assets/piece-disney.png";
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.budgetIcon = "../../assets/piece-harry.png";
    } else if (urlUniverse === '') {
      this.href = '/assets/css/home-light.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.budgetIcon = "../../assets/piece-marvel.png";
    }

    return this.budgetIcon;
  }

  iconSaison(): string {

    let urlUniverse: String = this.router.url;


    if (urlUniverse.startsWith('/naruto')) {
      if(this.recette.tags.saison === "Printemps"){
        this.saisonIcon = '../../assets/printemps-naruto.png';
      }else if(this.recette.tags.saison === "Été"){
        this.saisonIcon = '../../assets/ete-naruto.png'
      }else if(this.recette.tags.saison === "Hiver"){
        this.saisonIcon = '../../assets/hiver-naruto.png';
      }else if(this.recette.tags.saison === "Automne"){
        this.saisonIcon = '../../assets/automne-naruto.png';
      }else{
        this.saisonIcon = '../../assets/saison-naruto.png';
      }
    } else if (urlUniverse.startsWith('/disney')) {
      if(this.recette.tags.saison === "Printemps"){
        this.saisonIcon = '../../assets/printemps-disney.png';
      }else if(this.recette.tags.saison === "Été"){
        this.saisonIcon = '../../assets/ete-disney.png'
      }else if(this.recette.tags.saison === "Hiver"){
        this.saisonIcon = '../../assets/hiver-disney.png';
      }else if(this.recette.tags.saison === "Automne"){
        this.saisonIcon = '../../assets/automne-disney.png';
      }else{
        this.saisonIcon = '../../assets/saison-disney.png';
      }
    } else if (urlUniverse.startsWith('/harrypotter')) {
      if(this.recette.tags.saison === "Printemps"){
        this.saisonIcon = '../../assets/printemps-harry.png';
      }else if(this.recette.tags.saison === "Été"){
        this.saisonIcon = '../../assets/ete-harry.png'
      }else if(this.recette.tags.saison === "Hiver"){
        this.saisonIcon = '../../assets/hiver-harry.png';
      }else if(this.recette.tags.saison === "Automne"){
        this.saisonIcon = '../../assets/automne-harry.png';
      }else{
        this.saisonIcon = '../../assets/saison-harry.png';
      }
    } else if (urlUniverse === '') {
      this.href = '/assets/css/home-light.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      if(this.recette.tags.saison === "Printemps"){
        this.saisonIcon = '../../assets/printemps-marvel.png';
      }else if(this.recette.tags.saison === "Été"){
        this.saisonIcon = '../../assets/ete-marvel.png'
      }else if(this.recette.tags.saison === "Hiver"){
        this.saisonIcon = '../../assets/hiver-marvel.png';
      }else if(this.recette.tags.saison === "Automne"){
        this.saisonIcon = '../../assets/automne-marvel.png';
      }else{
        this.saisonIcon = '../../assets/saison-marvel.png';
      }
    }

    return this.saisonIcon;
  }

  iconMoins(){
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.moinsIcon = "../../assets/moins-naruto.png";
    } else if (urlUniverse.startsWith('/disney')) {
      this.moinsIcon = "../../assets/moins-disney.png";
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.moinsIcon = "../../assets/moins-harry.png";
    } else if (urlUniverse === '') {
      this.moinsIcon = '/assets/css/home-light.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.moinsIcon = "../../assets/moins-marvel.png";
    }

    return this.moinsIcon;
  }

  iconPlus(){
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.plusIcon = "../../assets/plus-naruto.png";
    } else if (urlUniverse.startsWith('/disney')) {
      this.plusIcon = "../../assets/plus-disney.png";
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.plusIcon = "../../assets/plus-harry.png";
    } else if (urlUniverse === '') {
      this.plusIcon = '/assets/css/home-light.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.plusIcon = "../../assets/plus-marvel.png";
    }

    return this.plusIcon;
  }

}
