import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../../models/recette';
import { RecettesService } from '../../services/recettes.service';
import { Utils } from "../../core/Utils";

/*import {slideAnimation, slideAnimationUniverse} from "../../annimations";*/

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: [],
  //encapsulation: ViewEncapsulation.,
})
export class UniversComponent implements OnInit, AfterViewInit, AfterViewChecked {

  isFromUniverse = true;

  recettes: Recette[] = [];
  universeSelected: string = '';

  href: string = '';
  hrefComponent: string = '';
  loading: boolean = true;

  constructor(private render: Renderer2, private router: Router, public recettesService: RecettesService) { }

  ngOnInit(): void {

    Utils.loadStyle(this.render, this.router);

    /*this.recettesService.findByUnivers(this.getUniverseSelected()).subscribe(response => this.recettes = response);*/
    this.recettesService.findByUnivers(this.getUniverseSelected()).subscribe(response => this.recettes = response);

  }


  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)

  }



  getStyleUnivers(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.href = '/assets/css/naruto.univers.component.css';
      this.hrefComponent = '/assets/css/naruto.component.css';
    } else if (urlUniverse.startsWith('/disney')) {
      this.href = '/assets/css/disney.univers.component.css';
      this.hrefComponent = '/assets/css/disney.component.css';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.href = '/assets/css/harrypotter.univers.component.css';
      this.hrefComponent = '/assets/css/harrypotter.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.href = '/assets/css/marvel.univers.component.css';
      this.hrefComponent = '/assets/css/marvel.component.css';
    }

    return this.href;
  }


  getUniverseSelected(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      return 'naruto';
    } else if (urlUniverse.startsWith('/disney')) {
      return 'disney';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      return 'harrypotter';
    } else if (urlUniverse.startsWith('/marvel')) {
      return 'marvel';
    }

    return '';
  }



}
