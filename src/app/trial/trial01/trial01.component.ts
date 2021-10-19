import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial01',
  templateUrl: './trial01.component.html',
  styleUrls: ['./trial01.component.scss']
})
export class Trial01Component implements OnInit {

  @Input() trial01Data:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
