import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {Recette} from '../../models/recette';
import {RecettesService} from '../../services/recettes.service';

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: [],
  //encapsulation: ViewEncapsulation.
})
export class UniversComponent implements OnInit {

  isFromUniverse = true;

  recettes: Recette[] = [];
  universeSelected: string = '';

  href: string = '';
  hrefComponent: string = '';

  constructor(private render: Renderer2, private router: Router, public recettesService: RecettesService) { }

  ngOnInit(): void {
    let styleLoaded: HTMLCollectionOf<HTMLLinkElement> = document.getElementsByTagName('link');

    for (let i = 0 ; i < styleLoaded.length ; i++) {
      let value: String = styleLoaded[i].href;

      if (value.match(/(.*)\/assets\/css\/([a-z]*)(\.univers\.component\.css)/)
        || value.match(/(.*)\/assets\/css\/([a-z]*)(\.component\.css)/)) {
        //console.log('in universe condition')
        this.render.removeChild(document.head, styleLoaded[i]);

        i--; //decrement as the collection is actually live
      }
    }

    let tag = this.render.createElement('link');
    this.getStyleUnivers();

    this.render.setProperty(tag, 'rel', 'stylesheet');
    this.render.setProperty(tag, 'href', this.href);

    this.render.appendChild(document.head, tag);

    tag = this.render.createElement('link');

    this.render.setProperty(tag, 'rel', 'stylesheet');
    this.render.setProperty(tag, 'href', this.hrefComponent);

    this.render.appendChild(document.head, tag);

    this.recettesService.findByUnivers(this.getUniverseSelected()).subscribe(response => this.recettes = response);

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
