import { Injectable } from '@angular/core';
import { ExecsInterface } from '../interfaces-enums/ExecsInterface';
import { tempExecs } from '../temp-items'
import { Position, Classification } from '../interfaces-enums/enums';
import { ExecBodyInterface } from '../interfaces-enums/ExecBodyInterface'

@Injectable({
  providedIn: 'root'
})
export class ExecsService {
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

  constructor() {
    this.createExecutiveBody(tempExecs);
  }

  getExecBody(): ExecBodyInterface{
    return this.execBody;
  }

  createExecutiveBody(inExecs: ExecsInterface[]) {
    inExecs.forEach(element => {
      switch (element.position) {
        case Position.President: {
          this.execBody.president = element;
          break;
        }
        case Position.ViceP: {
          this.execBody.viceP = element;
          break;
        }
        case Position.Secretary: {
          this.execBody.secretary = element;
          break;
        }
        case Position.ConfChair: {
          this.execBody.confChair = element;
          break;
        }
        case Position.FinChair: {
          this.execBody.finChair = element;
          break;
        }
        case Position.MemChair: {
          this.execBody.memChair = element;
          break;
        }
        case Position.PCIChair: {
          this.execBody.pCIChair = element;
          break;
        }
        case Position.Parl: {
          this.execBody.parl = element;
          break;
        }
        case Position.Programs: {
          this.execBody.programs = element;
          break;
        }
        case Position.PubChair: {
          this.execBody.pubChair = element;
          break;
        }
        case Position.Senator: {
          this.execBody.senator.push(element);
          break;
        }
        case Position.Treasurer: {
          this.execBody.treasurer = element;
          break;
        }

      }
      this.execBody.numExecs++;
      });

  }

}
