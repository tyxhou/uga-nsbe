import { Injectable } from '@angular/core';
import {nsbeUser} from '../entities/nsbeUser'
import { UserInterface } from '../interfaces-enums/UserInterface';
import { CookieService } from 'ngx-cookie-service';


//This service is used to pass data about the user to and from the components.
//Eventually this will be the point that is used to connect to the database

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  failUser: nsbeUser = new nsbeUser("FAIL", "", "", "", 0, "", false)
  users: nsbeUser[] = [];
  loggedIn: boolean;
  loggedInUser: UserInterface;
  userToEdit: UserInterface;

  public getloggedInUser(): UserInterface {
    return this.loggedInUser;
  }
  public setloggedInUser(value: UserInterface) {
    this.loggedInUser = value;
  }

  constructor(private cookieService: CookieService) { 
    let user1 = new nsbeUser("Tyler", "Houston",'tah15398@uga.edu', "tah15398", 10, "1234", true);
    let user2 = new nsbeUser("Mike", "Jones",'tah15398@uga.edu', "mak28723", 0, "1234", false);
    let user3 = new nsbeUser("John", "Doe",'tah15398@uga.edu', "jag23442", 3, "1234", false);
    let user4 = new nsbeUser("Jane", "Deer",'tah15398@uga.edu', "jcr28743", 2, "1234", false);
    this.users.push(user1, user2, user3, user4);
    this.cookieService.get("user") ?  this.setUserOnPageLoad() : this.loggedIn = false;
    if (this.loggedIn){
      console.log("user from user service: " + this.loggedInUser.fname);
    }
    else{
      console.log("Nobody logged in from user service");
    }
  }

  //right now, this method recives a myID and password, and checks for a match in an array of users 
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

  public returnUserInterfaces(): UserInterface[]{
    let userInterfaces: UserInterface[] = [];
    this.users.forEach(user => {
      let newUser: UserInterface = {
        fname: user.fName,
        lname: user.lName,
        email: user.email,
        points: user.points.valueOf(),
        admin: user.admin
      } 
      userInterfaces.push(newUser);
    });
    return userInterfaces;
  }

  //returns an object with the necessary information to the home component, creates user information cookie for .3 days
  //implement remeber me here
  createLoginSession(user: nsbeUser): UserInterface{
    var newUser: UserInterface = {
      fname: user.fName,
      lname: user.lName,
      email: user.email,
      points: user.points.valueOf(),
      admin: user.admin
    } 
    this.setloggedInUser(newUser);
    this.cookieService.set("user", JSON.stringify(this.loggedInUser), .3);
    this.loggedIn = true;
    return newUser;
  }

  //everytime the page loads. this method is called if there is user information saved in cookies
  //used for when page reloads to get user information again (it's lost when page is reloaded)
  //changes status to logged in
  setUserOnPageLoad(){
    this.loggedIn = true;
    this.loggedInUser = JSON.parse(this.cookieService.get("user"));
  }

  //called from home component when logout button is pressed, clears cookies and user info from tjis service, changes status to logged out
  logout(){
    console.log("Logout called");
    this.cookieService.deleteAll();
    console.log("cookies cleared");
    this.loggedIn = false;
    this.loggedInUser = null;
  }
  
}




