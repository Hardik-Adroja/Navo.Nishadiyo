import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilService } from '../common/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private utilService: UtilService) { }

  canActivate(): boolean {
    let loginDetail: any = (localStorage.getItem('login')) || "{}";
    loginDetail = JSON.parse(loginDetail)
    if (loginDetail && loginDetail["login"]) {
      this.utilService.isDisplaySideBar.next(true);
      return true;
    }
    else {
      this.router.navigateByUrl("/");
      return false;
    }
  }
}
