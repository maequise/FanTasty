import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  burger: string = '../../assets/hamburger.png';
  pathColor: string = '#7B61F8';
  iconTop: string = '../assets/recipe-book.png';
  iconTopDice: string = '../assets/dice.png';
  iconTopContest: string = '../assets/concours.png';
  iconHome: string = '../../assets/home.png';
  iconLogin: string = '../../assets/login.png';


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

  getBurgerMenu(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.burger = '../../assets/burger-naruto.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.burger = '../../assets/burger-disney.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.burger = '../../assets/burger-harry-potter.png';
    } else if (urlUniverse === '') {
      this.burger = '../../assets/hamburger.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.burger = '../../assets/burger-marvel.png';
    }

    return this.burger;
  }

  getIconTopSeason(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconTop = '../../assets/recipe-book-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconTop = '../../assets/recipe-book-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconTop = '../../assets/recipe-book-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconTop = '../../assets/recipe-book.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconTop = '../../assets/recipe-book-red-marvel.png';
    }

    return this.iconTop;
  }

  getIconTopDice(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconTopDice = '../../assets/dice-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconTopDice = '../../assets/dice-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconTopDice = '../../assets/dice-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconTopDice = '../../assets/dice.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconTopDice = '../../assets/dice-red-marvel.png';
    }

    return this.iconTopDice;
  }

  getIconTopContest(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconTopContest = '../../assets/concours-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconTopContest = '../../assets/concours-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconTopContest = '../../assets/concours-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconTopContest = '../../assets/concours.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconTopContest = '../../assets/concours-red-marvel.png';
    }

    return this.iconTopContest;
  }

  getIconHome(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconHome = '../../assets/home-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconHome = '../../assets/home-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconHome = '../../assets/home-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconHome = '../../assets/home.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconHome = '../../assets/home-red-marvel.png';
    }

    return this.iconHome;
  }

  getIconLogin(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconLogin = '../../assets/login-naruto.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconLogin = '../../assets/login-disney.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconLogin = '../../assets/login-harry-potter.png';
    } else if (urlUniverse === '') {
      this.iconLogin = '../../assets/login.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconLogin = '../../assets/login-marvel.png';
    }

    return this.iconLogin;
  }

}
