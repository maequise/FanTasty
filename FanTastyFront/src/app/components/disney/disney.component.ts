import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Recette } from '../../models/recette';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['../../../assets/css/disney.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DisneyComponent implements OnInit {
  recettes: Recette[] = [];
  isFromUniverse = true;

  constructor(private router: Router, private recetteService: RecettesService) {
    console.log('test + back');
  }

  ngOnInit(): void {
    this.recetteService.findAll().subscribe(response => {
      this.recettes = response;
    });

  }
  btnClickHome() {
    this.router.navigate(['']);
  }

  darkOnOff(event: Event) {
    let darkMode = <any>event;
    let element: Element = document.querySelector('body')!;
    let recipeCard: Element = document.querySelector('recipe-card')!;

    console.log(recipeCard)

    if (darkMode === 'dark') {
      (element.classList.add('dark'));
      (recipeCard.classList.remove('card-bg'));
    } else {
      element.classList.remove('dark');
    }
  }


}
