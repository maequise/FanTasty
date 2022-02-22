import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../../models/utilisateur";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser : Utilisateur | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
  }

  disconnect(){
    this.authService.logout();

    this.router.navigate(['/login']);

  }

}
