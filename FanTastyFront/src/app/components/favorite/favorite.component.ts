import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Recette} from "../../models/recette";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit, OnChanges {
  @Input()
  recetteLiked : Recette | null = null;

  constructor(private authService : AuthService, private userService : UserService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }



  favorite() : void {
    if(this.recetteLiked != null){
      this.userService.addFavoriteRecipe(this.authService.currentUserValue, this.recetteLiked);
    }else {
      this.favorite();
    }
  }
}
