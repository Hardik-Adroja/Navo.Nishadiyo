import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TrialPService } from 'src/app/Services/trial/trial-p.service';

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
  displayFeedbackList: any;


  @Input() childFeebackList: any;
  @Output() sendChildFeebackList = new EventEmitter<any>();


  constructor(private trialPService: TrialPService) { }

  ngOnInit(): void {
    this.trialPService.getItemList().subscribe((res) => { 
      this.childFeebackList = res
    },(res)=>{}) //Added New

  }

  takeAction(feId: any) {
    this.index = this.childFeebackList.findIndex((item: any) => item.feId === feId);
    this.actionWindow = true;
  }
  actionTaken() {
    this.actionWindow = false;
    this.childFeebackList[this.index].feResponce = this.responce;
    this.childFeebackList[this.index].feStatus = this.actionCatagory;
    this.displayFeedbackList = this.childFeebackList.filter((item: any) => item.feStatus === "" || item.feStatus === null)
    this.trialPService.addItemList(this.childFeebackList).subscribe(()=>{},()=>{}) //Added New
    this.sendChildFeebackList.emit(this.childFeebackList);
  }
  filter() {
    console.log(this.childFeebackList)
    this.displayFeedbackList = this.childFeebackList.filter((feed: any) => feed.feStatus === "" || feed.feStatus === null)
  }
}
