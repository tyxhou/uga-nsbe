import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {UsersService} from '../../services/users.service'
import { nsbeUser } from 'src/app/entities/nsbeUser';
import { HomeComponent } from '../../views/home/home.component';
import { UserInterface } from '../../interfaces/UserInterface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output () signedIn: EventEmitter<nsbeUser> = new EventEmitter();
  @Output () logout: EventEmitter<null> = new EventEmitter();


  myId: String = '';
  password: String = '';
  user: nsbeUser;
  loggedIn: boolean;
  loggedInUser: UserInterface;

  constructor(private userService:UsersService, private homeComponent: HomeComponent) { }

  faArrowDown = faArrowDown;

  ngOnInit() {
    this.setInfoIfLoggedIn()
  
  }

  setInfoIfLoggedIn(){
    this.loggedIn = this.homeComponent.loggedIn.valueOf();
    if(this.loggedIn){
      this.loggedInUser = this.homeComponent.loggedInUser
    }
  }

  //called from the html, if there is a match in the array held by UsersService, this will
  //emit(or let the home component know) to the home component that a match was found 
  //and pass that user along 
  //if no match, adds no match nssage to html
  signIn(): void{
    this.user = this.userService.attemptLogin(this.myId, this.password);
    if (this.user.fName == "FAIL"){
      console.log("FAILED ATTEMPT");
      window.document.getElementById("failedAttempt").classList.add("fail");
    }
    else{
      window.document.getElementById("failedAttempt").classList.remove("fail");
      this.signedIn.emit(this.user);
    }
  }

  //lets home component knoe the user has clicked logout
  logOut(): void{
    this.logout.emit();
  }

}
