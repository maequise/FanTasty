import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css'],
})
export class NarutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  btnClickHome() {
    this.router.navigate(['']);
  }

}
