import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trial03',
  templateUrl: './trial03.component.html',
  styleUrls: ['./trial03.component.scss']
})
export class Trial03Component implements OnInit {

  @Input() finalFeebackList:any

  constructor() { }

  ngOnInit(): void {
  }
  trial() {
    console.log(this.finalFeebackList)
  }

}
