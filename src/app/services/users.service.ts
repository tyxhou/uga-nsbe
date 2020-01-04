import { Injectable } from '@angular/core';
import {nsbeUser} from '../entities/nsbeUser'
import { loggedInUser } from '../interfaces/loggedInUser';

//This service is used to pass data about the user to and from the components.
//Eventually this will be the point that is used to connect to the database

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

  //right now, this method recives a myID and password, and check for a match in an array of users 
  //held in this service. iF there is a match, that user is returned
  //eventually this will use the database instead of some fake created users
  public attemptLogin(myId: String, password: String) : nsbeUser{
    console.log(myId + ' ' + password);
    for (var i = 0; i < this.users.length; i++){
      if (this.users[i].myId == myId && this.users[i].password == password){
        return this.users[i];
      }
    }
    return this.failUser
  }

  //returns an object with the necessary information to the home component
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
