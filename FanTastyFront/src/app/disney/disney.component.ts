import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DisneyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    /*if (document.querySelector('body')!.classList.contains('dark')) {
      document.querySelector('#exemple')?.setAttribute('checked', 'true');
    };
    console.log(document.querySelector('body')!.classList.contains('dark'));*/

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
