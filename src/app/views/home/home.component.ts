import { Component, OnInit } from '@angular/core';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent{

  constructor() { }


  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;
  faHandsHelping = faHandsHelping;

  ngOnInit() {
  }

}
