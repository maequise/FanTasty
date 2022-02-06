import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-template',
  templateUrl: './recipe-template.component.html',
  styleUrls: ['./recipe-template.component.css']
})
export class RecipeTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClickHome() {
    this.router.navigate(['']);
  }

  darkOnOff(event: Event) {
    let darkMode = <any>event;
    let element: Element = document.querySelector('body')!;
    let recipeCard: Element = document.querySelector('.recipe-card')!;

    console.log(recipeCard)

    if (darkMode === 'dark') {
      (element.classList.add('dark'));
      (recipeCard.classList.remove('card-bg'));
    } else {
      element.classList.remove('dark');
      (recipeCard.classList.add('card-bg'));
    }
  }


}
