import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trial01',
  templateUrl: './trial01.component.html',
  styleUrls: ['./trial01.component.scss']
})
export class Trial01Component implements OnInit {

  feedbackList:any = [];
  feedListout:any;
  feedback = this.fb.group({
    feId: [Math.random()],
    feName: ['aaa', Validators.required],
    feEmail: ['aaa@aaaa.aaa', Validators.required],
    feText: ['aaaaaaaaa', Validators.required],
    feTypeOf: ["suggestion", Validators.required],
    feResponce: [''],
    feStatus: ['']
  });

  @Input() trial01Data: string = "";
  @Output() sendFeedbackList = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    feedbackList:[]
    // this.feedListout = localStorage.getItem("feedList");
    // this.feedbackList = JSON.parse(this.feedListout) || [];
   }

  ngOnInit(): void {
  }
  feebackLoged() {
    this.feedbackList.push(this.feedback.value);
    this.sendFeedbackList.emit(this.feedbackList);
    // localStorage.setItem("feedList",JSON.stringify(this.feedbackList))
    // this.feedback.reset();

  }

}
