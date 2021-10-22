import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-trial02',
  templateUrl: './trial02.component.html',
  styleUrls: ['./trial02.component.scss']
})
export class Trial02Component implements OnInit {

  actionWindow = false;
  index: any;
  responce: any;
  actionCatagory: any;
  displayFeedbackList:any;


  @Input() childFeebackList: any;
  @Output() sendChildFeebackList = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {

  }

  takeAction(feId: any) {
    this.index = this.childFeebackList.findIndex((feed: any) => feed.feId === feId);
    console.log(this.index)
    this.actionWindow = true;
  }
  actionTaken() {
    this.actionWindow = false;
    this.childFeebackList[this.index].feResponce = this.responce;
    this.childFeebackList[this.index].feStatus = this.actionCatagory;
    this.displayFeedbackList = this.childFeebackList.filter((feed: any) => feed.feStatus === "" || feed.feStatus === null)
    console.log(this.childFeebackList)
    this.sendChildFeebackList.emit(this.childFeebackList);
    // this.actionCatagory.reset();
  }
  filter() {
    this.displayFeedbackList = this.childFeebackList.filter((feed: any) => feed.feStatus === "" || feed.feStatus === null)
  }
}
