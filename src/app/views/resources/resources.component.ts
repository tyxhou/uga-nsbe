import { Component, OnInit } from '@angular/core';
import { ResourcesInterface } from '../../interfaces-enums/ResourcesInterface'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: ResourcesInterface[] = [
    {
      resourceName: "Resume Builder",
      description: "This is the perfect place to do something with your resume",
      link: "youtube.com"
    },
    {
      resourceName: "NSBE GroupMe",
      description: "Join the GroupMe for info about shit",
      link: "https://groupme.com/join_group/40269253/8UAGjp"
    },
    {
      resourceName: "another resource",
      description: "This is the perfect place to do something else again mane this is just another example ",
      link: "google.com"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
