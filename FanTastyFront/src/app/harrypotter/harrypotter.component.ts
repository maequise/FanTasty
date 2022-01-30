import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

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
