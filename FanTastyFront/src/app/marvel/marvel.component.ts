import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnClickHome() {
    this.router.navigate(['']);
  }

}
