import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
  newBhidu = this.fb.group({
  name : ['', Validators.required],
  number : [''],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }
  onSubmit() {
    console.warn(this.newBhidu.value);
  }
  
  

}
