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

}
