import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {Utilisateur} from "../../../../models/utilisateur";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  createUserForm: FormGroup = this.formBuilder.group({
    name: [],
    lastname: [],
    email: [],
    password: [Validators.minLength(4), Validators.required],
    confirmPassword: []
  });

  isValid: boolean = false;

  constructor(private formBuilder : FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    //this.createUserForm.
  }

  create() : void {
    if(this.createUserForm.valid){
      let userToCreate: Utilisateur = new Utilisateur(
        null,
        this.createUserForm.get('lastname')?.value,
        this.createUserForm.get('name')?.value,
        this.createUserForm.get('email')?.value,
        [],
        [],
        []
      );

      userToCreate.password = this.createUserForm.get('password')?.value;

      console.log(userToCreate);

      this.userService.create(userToCreate);

    }
  }
}
