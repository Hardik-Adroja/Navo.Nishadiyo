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

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
 
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  receiveMsg($event:any) {
    this.msg = $event
    console.log(this.msg)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }
  onSubmit() {
    
  }
  
  

}
