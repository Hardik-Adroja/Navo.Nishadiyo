import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { UtilService } from '../common/util.service';
import { TrialPService } from '../Services/trial/trial-p.service';
import { Trial02Component } from './trial02/trial02.component';
import { Trial03Component } from './trial03/trial03.component';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit, OnDestroy {

  feedbackList: any;
  newFeedbackList: any;
  totalFeedback = 0;
  totalSolved = 0;

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
    this.totalFeedback = this.feedbackList.length;
  }

  receiveNewFeedbackList(event: any) {
    this.newFeedbackList = event;
    this.totalSolved = this.newFeedbackList.filter((item: any) => item.feResponce !== null && item.feResponce !== "").length;
  }
  receiveFinalFeedbackList(event: any) {
    let list = event;
    this.totalFeedback = list.length;
    this.totalSolved = list.filter((item: any) => item.feResponce !== null && item.feResponce !== "").length;
  }

  changeTab(event: any) {
    this.trial03component?.displayAll()
  }
  filterList(event: any) {
    this.trial02component?.filter()
  }

  constructor(private fb: FormBuilder,
    private trialPService: TrialPService,
    private utilService: UtilService) { }

  ngOnInit(): void {
    this.trialPService.getItemList().subscribe((res) => {
      this.feedbackList = res
      this.totalFeedback = this.feedbackList.length;
      this.totalSolved = this.feedbackList.filter((item: any) => item.feResponce !== null && item.feResponce !== "").length;
    }, (res) => { })

    this.utilService.reportAtTime.next(["trialIn", null, null])

  }
  ngOnDestroy() {
    this.utilService.reportAtTime.next(["trialOut", "trialIn", "trialTotal"])
  }

}
