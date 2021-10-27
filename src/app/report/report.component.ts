import { Component, OnInit } from '@angular/core';
import { UtilService } from '../common/util.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  visitTime: any = {}

  constructor(private utilService: UtilService) {

    this.utilService.reportAtTime.subscribe((res: any) => {
      this.utilService.setItemInTIme(res);
    })
  }

  ngOnInit(): void {
    this.visitTime = this.utilService.getItemInTIme()
  }

  getReport() {
    this.visitTime = this.utilService.getItemInTIme()

    console.log(this.visitTime)
  }

}
