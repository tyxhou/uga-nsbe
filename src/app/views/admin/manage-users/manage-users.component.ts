import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service'
import { UserInterface } from '../../../interfaces-enums/UserInterface'

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users: UserInterface[] = null;

  constructor(public usersService: UsersService) {
    this.users = this.usersService.returnUserInterfaces();
  }

  ngOnInit() {
    console.log(this.users);
  }

  setUserToEdit(user: UserInterface){
    this.usersService.userToEdit = user;
  }

}
