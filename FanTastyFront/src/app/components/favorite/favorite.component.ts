import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Recette } from "../../models/recette";
import { UserService } from "../../services/user.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit, OnChanges {

  iconHeart: string = '../../assets/img/heart-light.png';

  @Input()
  recetteLiked: Recette | null = null;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }



  favorite(): void {
    if (this.recetteLiked != null) {
      this.userService.addFavoriteRecipe(this.authService.currentUserValue, this.recetteLiked);
    } else {
      this.favorite();
    }
  }

  getIconHeart(): string {
    let urlUniverse: String = this.router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.iconHeart = '../../assets/img/heart-naruto.png';
    } else if (urlUniverse.startsWith('/disney')) {
      this.iconHeart = '../../assets/img/heart-disney.png';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.iconHeart = '../../assets/img/heart-harrypotter.png';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.iconHeart = '../../assets/img/heart-marvel.png';
    }

    return this.iconHeart;
  }
}
