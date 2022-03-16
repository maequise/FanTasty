import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-light',
  templateUrl: './home-light.component.html',
  styleUrls: ['../../../assets/css/home-light.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeLightComponent implements OnInit {

  @ViewChild('example') example!: ElementRef;



  constructor(private router: Router, private elementRef: ElementRef) { }

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
