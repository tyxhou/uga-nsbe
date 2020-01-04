import { Component, OnInit } from '@angular/core';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  faArrowDown = faArrowDown;

  ngOnInit() {
  }

}
