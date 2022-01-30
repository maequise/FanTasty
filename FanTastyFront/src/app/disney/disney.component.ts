import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-disney',
  templateUrl: './disney.component.html',
  styleUrls: ['./disney.component.css']
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

    if (darkMode === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }


}
