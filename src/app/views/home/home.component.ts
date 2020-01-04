import { Component, OnInit } from '@angular/core';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons';
import {UsersService} from '../../services/users.service'
import { nsbeUser } from 'src/app/entities/nsbeUser';
import { CookieService } from 'ngx-cookie-service';
import { loggedInUser } from '../../interfaces/loggedInUser'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent{

  loggedInUser: loggedInUser;
  loggedIn: Boolean;
  
  constructor(private userService:UsersService, private cookieService: CookieService) { }

  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  faHandsHelping = faHandsHelping;

  ngOnInit() { 
    this.cookieService.get("user") ?  this.setUser() : this.loggedIn = false;
     console.log("Logged In: " + this.loggedIn);
  }

  signIn(user: nsbeUser):void{
    this.loggedInUser = this.userService.setUser(user);
    //check here and use remember me method when implementing remember me on checkbox mark
    this.cookieService.set("user", JSON.stringify(this.loggedInUser), .3);
    this.loggedIn = true;
    window.location.reload();
  }

  logout():void{
    console.log("Logout called");
    this.loggedInUser = null;
    this.loggedIn = false;
    this.cookieService.deleteAll();
    window.location.reload()
  }

  setUser(){
    this.loggedIn = true;
    this.loggedInUser = JSON.parse(this.cookieService.get("user"));
    console.log(this.loggedInUser);
  }

  //use when implementing remember me checkbox
  rememberMe(user: nsbeUser){
    this.cookieService.set("user", JSON.stringify(user), 14);
  }

}
