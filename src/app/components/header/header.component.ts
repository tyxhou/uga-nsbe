import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {UsersService} from '../../services/users.service'
import { nsbeUser } from 'src/app/entities/nsbeUser';


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

  constructor(private userService:UsersService) { }

  faArrowDown = faArrowDown;

  ngOnInit() {
  }

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

  logOut(): void{
    this.logout.emit();
  }

}
