import { UtilService } from './../common/util.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.reportAtTime.next(["dashboardIn", null, null])
  }
  ngOnDestroy() {
    this.utilService.reportAtTime.next(["dashboardOut", "dashboardIn", "dashboardTotal"])
  }
}
