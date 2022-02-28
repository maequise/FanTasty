import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  @Output()
  confirmedDeletion: boolean = false;
  clickedToDelete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteAccount() : void {
    this.clickedToDelete = true;

    if(this.confirmedDeletion){
      //@TODO implement the delete account
    }
  }

  confirmation(): void {
    this.confirmedDeletion = true;
  }

  cancelDelete() : void {
    this.clickedToDelete = false;
  }

}
