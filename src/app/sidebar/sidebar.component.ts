import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './../common/util.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router, private utilService:UtilService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigateByUrl("/");
    localStorage.setItem("login",JSON.stringify({login:false}))
    this.utilService.isDisplaySideBar.next(false);
    // localStorage.removeItem("userDetail")
  }

}
