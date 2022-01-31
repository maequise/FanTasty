import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-light',
  templateUrl: './home-light.component.html',
  styleUrls: ['./home-light.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class HomeLightComponent implements OnInit {

  @ViewChild('example') example!: ElementRef;



  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {

    /*if (document.body.classList.contains('dark')) {
      document.querySelector('#exemple')?.setAttribute('checked', 'true');
    };*/


  }

  btnClickHome() {
    this.router.navigate(['']);
  }

  btnClickDisney() {
    this.router.navigate(['/disney']);
  }
  btnClickNaruto() {
    this.router.navigate(['/naruto']);
  }
  btnClickMarvel() {
    this.router.navigate(['/marvel']);
  }
  btnClickHarryPotter() {
    this.router.navigate(['/harrypotter']);
  }
  btnClickWowCraft() {
    this.router.navigate(['/wowcraft']);
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
