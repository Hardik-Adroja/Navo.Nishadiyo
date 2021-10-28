import { UtilService } from './../common/util.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private utilService:UtilService) { }
 
  ngOnInit(): void {
  this.utilService.reportAtTime.next(["homeIn",null,null])
  }
  ngOnDestroy(){
    this.utilService.reportAtTime.next(["homeOut","homeIn","homeTotal"])
  }
}
