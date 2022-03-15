import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { RecettesService } from 'src/app/services/recettes.service';
import { Recette } from 'src/app/models/recette';
import { Utilisateur } from 'src/app/models/utilisateur';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: Utilisateur | null = null;
  recettes: Recette[] = [];

  iconHeart: string = '../../assets/img/heart-light.png';


  constructor(private authService: AuthService, private router: Router, private recetteService: RecettesService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;

    this.currentUser.recetteFavoris.forEach(rec => {
      this.recetteService.findById(rec).subscribe(response => this.recettes.push(response));
    });

    //loop sur recette of user
    //fetch recette
    //put in array : push
  }

  disconnect() {
    this.authService.logout();

    this.router.navigate(['/login']);

  }

  getImage(img: string): string {
    return this.recetteService.getImage(img);
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
