import { UtilService } from './../common/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetail: any = "";
  constructor(private utilService: UtilService) {
    // this.utilService.isDisplaySideBar.subscribe((res) => {
    //   if (res) {
    //     this.ngOnInit()
    //   }
    // })
  }

  ngOnInit(): void {
    this.userDetail = JSON.parse(localStorage.getItem("userDetail") || "{}");
    console.log(this.userDetail)
  }
  

  }
