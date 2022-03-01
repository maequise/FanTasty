import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../../models/recette';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['../../../assets/css/marvel.univers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelComponent implements OnInit {
  recettes: Recette[] = [];

  constructor(private router: Router, private recetteService: RecettesService) { }

  ngOnInit(): void {
    this.recetteService.findAll().subscribe(response => this.recettes = response);
  }
  btnClickHome() {
    this.router.navigate(['']);
  }
  darkOnOff(event: Event) {
    let darkMode = <any>event;
    let element: Element = document.querySelector('body')!;

    if (darkMode === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }

}
