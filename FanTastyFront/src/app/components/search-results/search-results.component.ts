import { Component, Input, OnInit } from '@angular/core';
import { Recette } from 'src/app/models/recette';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['../../../assets/css/home-light.component.css'],
})
export class SearchResultsComponent implements OnInit {

  constructor(public recettesService: RecettesService) { }
  @Input()
  recettes: Recette[] = [];
  
  ngOnInit(): void {
  }



  

}