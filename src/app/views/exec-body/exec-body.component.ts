import { Component, OnInit } from '@angular/core';
import { ExecsService } from '../../services/execs.service'
import { ExecBodyInterface } from '../../interfaces-enums/ExecBodyInterface'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { linkedin } from '@fortawesome/fontawesome-free'

@Component({
  selector: 'app-execs',
  templateUrl: './exec-body.component.html',
  styleUrls: ['./exec-body.component.css']
})
export class ExecBodyComponent implements OnInit {
  execBody: ExecBodyInterface = {
    president: null,
    viceP: null,
    secretary: null,
    confChair: null,
    finChair: null,
    memChair: null,
    pCIChair: null,
    parl: null,
    programs: null,
    pubChair: null,
    senator: [],
    treasurer: null,
    numExecs: null
  };
  //you need an array to produce the rows in the html...idk
  numRows: number[] = [];
  linkedin = linkedin;

  constructor(public execsService: ExecsService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.execBody = this.execsService.getExecBody();
    console.log(this.execBody);
  }

  getBackground(image: String) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
}

}
