import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TrialPService } from 'src/app/Services/trial/trial-p.service';

@Component({
  selector: 'app-trial01',
  templateUrl: './trial01.component.html',
  styleUrls: ['./trial01.component.scss']
})
export class Trial01Component implements OnInit {

  feedbackList: any = [];
  feedListout: any;

  feedback = this.fb.group({
    feId: [Math.random()],
    feName: ['aaa', Validators.required],
    feEmail: ['aaa@aaaa.aaa', Validators.required],
    feText: ['aaaaaaaaa', Validators.required],
    feTypeOf: ["suggestion", Validators.required],
    feResponce: [''],
    feStatus: [null]
  });

  @Output() sendFeedbackList = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private trialPService: TrialPService) {

  }

  ngOnInit(): void {
    this.trialPService.getItemList().subscribe((res)=>{
      this.feedbackList = res;
    },()=>{})
  }

  feebackLoged() {
    this.feedbackList.push(this.feedback.value);
    this.sendFeedbackList.emit(this.feedbackList);
    this.trialPService.addItemList(this.feedbackList).subscribe(() => { }, () => { }) //added new
    this.feedback.reset();
    this.feedback.controls["feId"].setValue(Math.random());
  }

}
