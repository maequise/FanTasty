import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

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


}
