import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-light',
  templateUrl: './home-light.component.html',
  styleUrls: ['./home-light.component.css']
})
export class HomeLightComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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

}
