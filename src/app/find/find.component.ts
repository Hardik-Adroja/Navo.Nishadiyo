import { UtilService } from './../common/util.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit, OnDestroy {

  constructor(private utilService:UtilService) { }

  ngOnInit(): void {
    this.utilService.reportAtTime.next(["findIn",null,null])
  }
  ngOnDestroy(){
    this.utilService.reportAtTime.next(["findOut","findIn","findTotal"])
  }  
}