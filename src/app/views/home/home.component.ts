import { Component, OnInit } from '@angular/core';

import { faGraduationCap } from '@fortawesome/fontawesome-free';
import { faBriefcase } from '@fortawesome/fontawesome-free';
import { faHandsHelping} from '@fortawesome/fontawesome-free';


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
