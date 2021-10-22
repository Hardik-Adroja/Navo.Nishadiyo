import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trial03',
  templateUrl: './trial03.component.html',
  styleUrls: ['./trial03.component.scss']
})
export class Trial03Component implements OnInit {

  displayCatagory: any;
  filteredFeedbackList: any;


  @Input() finalFeebackList: any;


  constructor() { }

  ngOnInit(): void {
  }
  trial() {
    console.log(this.finalFeebackList)
    if(this.displayCatagory){
      this.filteredFeedbackList = this.finalFeebackList.filter((select: any) => `${select.feStatus}1` === this.displayCatagory)
    }
    else{
      this.filteredFeedbackList = this.finalFeebackList.filter((select: any) => select.feResponce !== null &&  select.feResponce !== "")
    }
  }
  trial1() {
    this.displayCatagory = "all"
    this.filteredFeedbackList = this.finalFeebackList.filter((select: any) => select.feResponce !== null &&  select.feResponce !== "")
    
  }
  
}
