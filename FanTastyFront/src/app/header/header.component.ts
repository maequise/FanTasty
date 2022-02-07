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


  constructor(private router: Router) { }

  ngOnInit(): void {
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

  getBurgerMenu(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse === '/naruto') {
      this.burger = '../../assets/burger-naruto.png';
    } else if (urlUniverse === '/disney') {
      this.burger = '../../assets/burger-disney.png';
    } else if (urlUniverse === '/harrypotter') {
      this.burger = '../../assets/burger-harry-potter.png';
    } else if (urlUniverse === '') {
      this.burger = '../../assets/hamburger.png';
    } else if (urlUniverse === '/marvel') {
      this.burger = '../../assets/burger-marvel.png';
    }
    return this.burger;
  }

  getIconTopSeason(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse === '/naruto') {
      this.iconTop = '../../assets/recipe-book-orange.png';
    } else if (urlUniverse === '/disney') {
      this.iconTop = '../../assets/recipe-book-blue.png';
    } else if (urlUniverse === '/harrypotter') {
      this.iconTop = '../../assets/recipe-book-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconTop = '../../assets/recipe-book.png';
    } else if (urlUniverse === '/marvel') {
      this.iconTop = '../../assets/recipe-book-red-marvel.png';
    }

    return this.iconTop;
  }

  getIconTopDice(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse === '/naruto') {
      this.iconTopDice = '../../assets/dice-orange.png';
    } else if (urlUniverse === '/disney') {
      this.iconTopDice = '../../assets/dice-blue.png';
    } else if (urlUniverse === '/harrypotter') {
      this.iconTopDice = '../../assets/dice-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconTopDice = '../../assets/dice.png';
    } else if (urlUniverse === '/marvel') {
      this.iconTopDice = '../../assets/dice-red-marvel.png';
    }

    return this.iconTopDice;
  }

  getIconTopContest(): string {
    let urlUniverse: string = this.router.url;

    if (urlUniverse === '/naruto') {
      this.iconTopContest = '../../assets/concours-orange.png';
    } else if (urlUniverse === '/disney') {
      this.iconTopContest = '../../assets/concours-blue.png';
    } else if (urlUniverse === '/harrypotter') {
      this.iconTopContest = '../../assets/concours-red-bordeaux.png';
    } else if (urlUniverse === '') {
      this.iconTopContest = '../../assets/concours.png';
    } else if (urlUniverse === '/marvel') {
      this.iconTopContest = '../../assets/concours-red-marvel.png';
    }

    return this.iconTopContest;
  }


}
