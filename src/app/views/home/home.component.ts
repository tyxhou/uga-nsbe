import { Component, OnInit} from '@angular/core';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../../services/users.service'
import { nsbeUser } from 'src/app/entities/nsbeUser';
import { UserInterface } from '../../interfaces/UserInterface'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  loggedInUser: UserInterface = null;
  loggedIn: Boolean;
  
  constructor(private userService:UsersService) { }

  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  faHandsHelping = faHandsHelping;

  ngOnInit() { 
    this.userService.loggedIn ?  this.setUser() : this.loggedIn = false;
    if(this.loggedIn)
      console.log("from: home: " + this.loggedInUser.fname);
  }

  //called when sign in event is heard from header component, sets necessary info(loggedinuser), saves info to cookies for
  //half a day, status is now logged in, reloads page
  signIn(user: nsbeUser):void{
    this.loggedInUser = this.userService.createLoginSession(user);
    //check here and use remember me method when implementing remember me on checkbox mark
    this.loggedIn = true;
    window.location.reload()
  }

  //called when logout event is heard from header component,calls logout metho in users service
  //, sets status to logged out and clears user info(loggedinuser), reloads page
  logout():void{
    this.loggedInUser = null;
    this.loggedIn = false;
    this.userService.logout();
    window.location.reload()
  }

  setUser(){
    this.loggedIn = true;
    this.loggedInUser = this.userService.getloggedInUser();
  }
}
