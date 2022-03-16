import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Login } from "../../models/Login";
import { Router } from "@angular/router";
import { Renderer2 } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private static href: string = '';
  private static hrefComponent: string = '';


  formLogin: FormGroup = this.formBuilder.group({
    username: [],
    password: []
  });

  userLogged: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,
    private render: Renderer2) { }

  ngOnInit(): void {
    this.userLogged = this.authService.isUserLogged();

    this.loadStyle();

  }

  login(): void {
    let user: Login = new Login(this.formLogin.get('username')?.value, this.formLogin.get('password')?.value);

    this.authService.loginBis(user).subscribe(result => {
      if (result) {
        this.router.navigate(['/user/manage']);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  loadStyle(): void {
    let styleLoaded: HTMLCollectionOf<HTMLLinkElement> = document.getElementsByTagName('link');

    for (let i = 0; i < styleLoaded.length; i++) {
      console.log('looping again !')
      let value: String = styleLoaded[i].href;

      if (value.match(/(.*)\/assets\/css\/([a-z]*)(\.univers\.component\.css)/)
        || value.match(/(.*)\/assets\/css\/([a-z]*)(\.component\.css)/)) {
        //console.log('in universe condition')
        this.render.removeChild(document.head, styleLoaded[i]);

        i--; //decrement as the collection is actually live
      }
    }



    //this.getStyleUnivers(router);


  }

  private static getStyleUnivers(router: Router): string {
    let urlUniverse: String = router.url;

    if (urlUniverse.startsWith('/naruto')) {
      this.href = '/assets/css/naruto.univers.component.css';
      this.hrefComponent = '/assets/css/naruto.component.css';
    } else if (urlUniverse.startsWith('/disney')) {
      this.href = '/assets/css/disney.univers.component.css';
      this.hrefComponent = '/assets/css/disney.component.css';
    } else if (urlUniverse.startsWith('/harrypotter')) {
      this.href = '/assets/css/harrypotter.univers.component.css';
      this.hrefComponent = '/assets/css/harrypotter.component.css';
    } else if (urlUniverse.startsWith('/marvel')) {
      this.href = '/assets/css/marvel.univers.component.css';
      this.hrefComponent = '/assets/css/marvel.component.css';
    }

    return this.href;
  }
}
