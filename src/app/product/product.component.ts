import { UtilService } from './../common/util.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit,OnDestroy {

  constructor(private utilService:UtilService) { }

  ngOnInit(): void {
this.utilService.reportAtTime.next(["productIn",null,null])
  }
ngOnDestroy(){
  this.utilService.reportAtTime.next(["productOut","productIn","productTotal"])
}
}
