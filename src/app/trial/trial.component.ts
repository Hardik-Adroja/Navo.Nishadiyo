import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { Trial02Component } from './trial02/trial02.component';
import { Trial03Component } from './trial03/trial03.component';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
  trialData = "My Name Is Trial Data";
  msg: string = "";
  feedbackList: any;
  newFeedbackList: any;
  feedbackListNumber = 0;
  newFeedbackListNumber = 0;

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  @ViewChild(Trial03Component) trial03component?: Trial03Component;
  @ViewChild(Trial02Component) trial02component?: Trial02Component;

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  receiveFeedbackList(event: any) {
    this.feedbackList = event;
    this.feedbackListNumber = this.feedbackList.length;
  }
  receiveNewFeedbackList(event: any) {
    this.newFeedbackList = event;
    this.newFeedbackListNumber = this.newFeedbackList.filter((select: any) => select.feResponce !== null &&  select.feResponce !== "").length;
  }
  changeTab(event: any) {
    this.trial03component?.trial1()
  }
  filterList(event: any) {
    this.trial02component?.filter()
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  
}
