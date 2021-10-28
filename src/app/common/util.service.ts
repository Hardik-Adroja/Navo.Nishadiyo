import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  isDisplaySideBar = new Subject();

  reportAtTime = new Subject();
  visitTime: any = {
    itemIn: "",
    itemOut: "",
    itemTotal: 0,
    trialIn:"",
    trialOut:"",
    trialTotal:0,
    homeIn:"",
    homeOut:"",
    homeTotal:0,
    serviceIn:"",
    serviceOut:"",
    serviceTotal:0,
    productIn:"",
    productOut:"",
    productTotal:0,
    dashboardIn:"",
    dashboardOut:"",
    dashboardTotal:0, 
    findIn:"",
    findOut:"",
    findTotal:0,
    contactIn:"",
    contactOut:"",
    contactTotal:0, 
  }


  constructor() { }

  getItemInTIme() {
    return this.visitTime;
  }

  setItemInTIme(res: any) {
    let index0 = res[0]
    let index1 = res[1]
    let index2 = res[2]
    this.visitTime[index0] = new Date().getTime();
    if (index1 && index2 !== null) {
      this.visitTime[index2] = this.visitTime[index0] - this.visitTime[index1];
    }

  }
}
