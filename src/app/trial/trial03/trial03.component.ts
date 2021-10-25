import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrialPService } from 'src/app/Services/trial/trial-p.service';

@Component({
  selector: 'app-trial03',
  templateUrl: './trial03.component.html',
  styleUrls: ['./trial03.component.scss']
})
export class Trial03Component implements OnInit {

  displayCatagory: any;
  filteredFeedbackList: any;


  @Input() finalFeebackList: any;
  @Output() sendFinalFeebackList = new EventEmitter<any>();

  constructor(private trialPService: TrialPService) { }

  ngOnInit(): void {
    this.trialPService.getItemList().subscribe((res) => {
      this.finalFeebackList = res;
    }, (res) => { })
  }
  display() {
    if (this.displayCatagory) {
      this.filteredFeedbackList = this.finalFeebackList.filter((item: any) => `${item.feStatus}1` === this.displayCatagory)
    }
    else {
      this.filteredFeedbackList = this.finalFeebackList.filter((item: any) => item.feResponce !== null && item.feResponce !== "")
    }
  }
  displayAll() {
    this.displayCatagory = "all"
    this.filteredFeedbackList = this.finalFeebackList.filter((select: any) => select.feResponce !== null && select.feResponce !== "")
  }

  remove(feId: any) {
    let index = this.finalFeebackList.findIndex((item: any) => item.feId === feId)
    this.finalFeebackList.splice(index, 1)
    this.filteredFeedbackList = this.finalFeebackList.filter((select: any) => select.feResponce !== null && select.feResponce !== "")
    console.log(this.finalFeebackList)
    this.trialPService.addItemList(this.finalFeebackList).subscribe(() => { }, () => { });
    this.sendFinalFeebackList.emit(this.finalFeebackList);
  }

}
