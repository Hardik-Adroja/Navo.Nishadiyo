import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trial02',
  templateUrl: './trial02.component.html',
  styleUrls: ['./trial02.component.scss']
})
export class Trial02Component implements OnInit {

  msgNew="";
  msg:string="Kam Kar Raha He";
  @Output() sendMsgEvent = new EventEmitter<string>();

  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
