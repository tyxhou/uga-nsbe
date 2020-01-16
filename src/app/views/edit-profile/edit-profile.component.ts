import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserInterface } from 'src/app/interfaces-enums/UserInterface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  loggedInUser: UserInterface = null;
  inFName: String = null;
  inLName: String = null;
  inEmail: String = null;

  constructor(public usersservice: UsersService) { }

  ngOnInit() {
    this.loggedInUser = this.usersservice.loggedInUser;
  }

  try(){
    console.log(this.inFName, this.inLName, this.inEmail);
  }

}
