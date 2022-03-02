import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/css/header.component.css'],
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
  iconDisney: string = '../../assets/home-disney-light.png';
  iconNaruto: string = '../../assets/home-naruto-light.png';
  iconMarvel: string = '../../assets/home-marvel-light.png';
  iconHarryPotter: string = '../../assets/home-harry-potter-light.png';
  borderColorSideBar: string = 'borderColorLight';




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
    let sideBarBg: Element = document.querySelector('.sidebar')!;
    let modal: Element = document.querySelector('.container')!;
    let toggleOnBg: Element = document.querySelector('.toggle')!;
    let toggleOffBg: Element = document.querySelector('.utensils-back')!;

    console.log(sideBarBg)
    console.log(toggleOnBg)
    console.log(toggleOffBg)

    if (darkMode === 'dark') {
      element.classList.add('dark');
      modal.classList.remove('bg-light-modal');
      modal.classList.add('bg-dark-modal');
      sideBarBg.classList.remove('sd-light');
      sideBarBg.classList.add('sd-dark');

      if (recipeCard != null) {
        recipeCard.classList.remove('card-bg');
      }

      if (toggleOnBg != null) {
        toggleOnBg.classList.remove('toggle-light');
        toggleOnBg.classList.add('toggle-dark');
      }

      if (toggleOffBg != null) {
        toggleOffBg.classList.remove('utensils-light');
        toggleOffBg.classList.add('sd-dark');
      }

    } else {
      element.classList.remove('dark');

      if (recipeCard != null) {
        recipeCard.classList.add('card-bg');
      }

      if (toggleOnBg != null) {
        toggleOnBg.classList.add('toggle-light');
        toggleOnBg.classList.remove('toggle-dark');

      }

      if (toggleOffBg != null) {
        toggleOffBg.classList.add('utensils-light');
        toggleOffBg.classList.remove('sd-dark');
      }

      modal.classList.add('bg-light-modal');
      modal.classList.remove('bg-dark-modal')
      sideBarBg.classList.remove('sd-dark');
      sideBarBg.classList.add('sd-light');

    }
  }

  getCloseModalPathColor(): string {
    let urlUniverse: String = this.router.url;
    if (urlUniverse.startsWith('/naruto')) {
      this.pathColor = '#F85125';
    } else if (urlUniverse.startsWith('/disney')) {
      this.pathColor = '#12c4e3';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.pathColor = '#c30046';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.pathColor = '#e53935';
    } else if (urlUniverse.startsWith('')) {
      this.pathColor = '#7B61F8';
    }

    return this.pathColor;
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
      this.iconLogin = '../../assets/home-login-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconLogin = '../../assets/home-login-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconLogin = '../../assets/home-login-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconLogin = '../../assets/login.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconLogin = '../../assets/home-login-red-marvel.png';
    }

    return this.iconLogin;
  }

  getIconDisney(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconDisney = '../../assets/home-disney-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconDisney = '../../assets/home-disney-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconDisney = '../../assets/home-harrypotter-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconDisney = '../../assets/home-disney-light.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconDisney = '../../assets/home-disney-red-marvel.png';
    }

    return this.iconDisney;
  }

  getIconNaruto(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconNaruto = '../../assets/home-naruto-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconNaruto = '../../assets/home-naruto-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconNaruto = '../../assets/home-naruto-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconNaruto = '../../assets/home-naruto-light.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconNaruto = '../../assets/home-naruto-red-marvel.png';
    }

    return this.iconNaruto;
  }

  getIconMarvel(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconMarvel = '../../assets/home-marvel-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconMarvel = '../../assets/home-marvel-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconMarvel = '../../assets/home-marvel-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconMarvel = '../../assets/home-marvel-light.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconMarvel = '../../assets/home-marvel-red-marvel.png';
    }

    return this.iconMarvel;
  }

  getIconHarryPotter(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconHarryPotter = '../../assets/home-harry-potter-orange.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconHarryPotter = '../../assets/home-harry-potter-blue.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconHarryPotter = '../../assets/home-harry-potter-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconHarryPotter = '../../assets/home-harry-potter-light.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconHarryPotter = '../../assets/home-harry-potter-red-marvel.png';
    }

    return this.iconHarryPotter;
  }




}
