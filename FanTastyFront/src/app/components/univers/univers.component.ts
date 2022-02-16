import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../../models/recette';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: ['../../../assets/css/disney.univers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UniversComponent implements OnInit {

  isFromUniverse = true;

  recettes: Recette[] = [];
  universeSelected: string = '';

  href: string = '/assets/css/marvel.univers.component.css';

  constructor(private render: Renderer2, private router: Router, public recettesService: RecettesService) { }

  ngOnInit(): void {

    let tag = this.render.createElement('link');
    this.href = this.getStyleUnivers();

    this.render.setProperty(tag, 'rel', 'stylesheet');
    this.render.setProperty(tag, 'href', this.href);
    this.render.appendChild(document.body, tag);


    this.recettesService.findByUnivers(this.getUniverseSelected()).subscribe(response => this.recettes = response);

  }

  getStyleUnivers(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.href = '/assets/css/naruto.univers.component.css';
    } else if (urlUniverse.startsWith('/disney')) {
      this.href = '/assets/css/disney.univers.component.css';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.href = '/assets/css/harrypotter.univers.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.href = '/assets/css/marvel.univers.component.css';
    }

    console.log(this.href);

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
