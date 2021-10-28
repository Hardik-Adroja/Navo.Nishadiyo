import { UtilService } from './../common/util.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.reportAtTime.next(["contactIn", null, null])
  }
  ngOnDestroy() {
    this.utilService.reportAtTime.next(["contactOut", "contactIn", "contactTotal"])
  }
}
