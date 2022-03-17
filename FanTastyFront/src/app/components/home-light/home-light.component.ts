import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {Router} from '@angular/router';
import {RecettesService} from 'src/app/services/recettes.service';
import {Recette} from 'src/app/models/recette';

@Component({
  selector: 'app-home-light',
  templateUrl: './home-light.component.html',
  styleUrls: ['../../../assets/css/home-light.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeLightComponent implements OnInit, AfterViewInit {

  @ViewChild('example') example!: ElementRef;
  @ViewChildren('children') children!: QueryList<ElementRef>;

  recettes: Recette[] = [];


  constructor(private router: Router, private elementRef: ElementRef, private recetteService: RecettesService) {
  }

  ngAfterViewInit(): void {
    this.children.forEach((element, index, children) => {
      element.nativeElement.childNodes.forEach((value: Element) => {
        value.addEventListener("click", function (event) {//add a click event
          children.forEach((elementT) => {
            elementT.nativeElement.childNodes.forEach((valueT: Element) => {
              valueT.classList.remove('panel_active')
            });
          });
          value.classList.add("panel_active");//when i click i add a class style 'active '
        })//
      })
    });
  }

  ngOnInit(): void {
    this.recetteService.findAll().subscribe(response => {
      let counter = 0;
      response.forEach((value, index) => {


        if (index > 2) {
          return;
        }

        if (counter < 2) {
          this.recettes.push(value);
        }
        counter++;
      });
    })

  }

  getImage(file: string): string {
    return this.recetteService.getImage(file);
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
