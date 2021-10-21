import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
  trialData = "My Name Is Trial Data";
  msg:string = "";
  feedbackList:any = [];
  newFeedbackList:any;
  feedbackListNumber = 0;

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
 
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  
  receiveFeedbackList($event:any) {
    this.feedbackList = $event;
    this.feedbackListNumber = this.feedbackList.length;
  }
  receiveNewFeedbackList($event:any) {
    this.newFeedbackList = $event;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }
  trial() {
    console.log(this.newFeedbackList)
  }
  
  

}
