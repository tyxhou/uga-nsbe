import { Injectable } from '@angular/core';
import {nsbeUser} from '../entities/nsbeUser'
import { loggedInUser } from '../interfaces/loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  failUser: nsbeUser = new nsbeUser("FAIL", "", "", "", 0, "", false)
  users: nsbeUser[] = [];

  constructor() { 
    var user1 = new nsbeUser("Tyler", "Houston",'tah15398@uga.edu', "tah15398", 10, "1234", false);
    var user2 = new nsbeUser("Mike", "Jones",'tah15398@uga.edu', "mak28723", 10, "1234", false);
    var user3 = new nsbeUser("John", "Doe",'tah15398@uga.edu', "jag23442", 10, "1234", false);
    var user4 = new nsbeUser("Jane", "Deer",'tah15398@uga.edu', "jcr28743", 10, "1234", false);
    this.users.push(user1, user2, user3, user4);
  }

  public attemptLogin(myId: String, password: String) : nsbeUser{
    console.log(myId + ' ' + password);
    for (var i = 0; i < this.users.length; i++){
      if (this.users[i].myId == myId && this.users[i].password == password){
        return this.users[i];
      }
    }
    return this.failUser
  }

  setUser(user: nsbeUser): loggedInUser{
    var newUser: loggedInUser = {
      fname: user.fName,
      lname: user.lName,
      email: user.email,
      points: user.points.valueOf(),
      admin: user.admin
    } 
    return newUser;
  }
}
