import { UtilService } from './../common/util.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit, OnDestroy {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.reportAtTime.next(["serviceIn", null, null])
  }
  ngOnDestroy() {
    this.utilService.reportAtTime.next(["serviceOut", "serviceIn", "serviceTotal"])
  }
}
