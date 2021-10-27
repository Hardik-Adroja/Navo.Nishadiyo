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
    itemTotal: "",
    trialIn:"",
    trialOut:"",
    trialTotal:""
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
      let ms = this.visitTime[index0] - this.visitTime[index1];
      let hour = Math.floor(ms / 3600000)
      let min = Math.floor((ms - (3600000 * hour)) / 60000)
      let sec = Math.round((ms - (3600000 * hour) - (60000 * min)) / 1000)
      this.visitTime[index2] = `${hour} hr : ${min} min : ${sec} sec`
    }

  }
}
