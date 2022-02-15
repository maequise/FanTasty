import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDarkMode]'
})
export class DarkModeDirective {

  @Output('appDarkMode') appDarkMode = new EventEmitter<any>();

  attribut: boolean = false;
  //condition? expSivrai: expSiFAux; 

  constructor(elem: ElementRef) {


    elem.nativeElement.addEventListener('click', (event: Event) => {
      console.log("Directive");
      this.attribut = !this.attribut;
      this.appDarkMode.emit(this.attribut ? 'dark' : '');
      console.log(this.attribut);


    })

  }

}
