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
  }
  btnClickHome() {
    this.router.navigate(['']);
  }


}
