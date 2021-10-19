import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UtilService } from '../common/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private router: Router, private messageService: MessageService, private utilService:UtilService) { }

  ngOnInit(): void {
  }

  onLogin() {
    // console.log(this.email)
    if (this.email === "abc@mail.com" && (this.password === "abc" || this.password==="bcd")) {
      localStorage.setItem("login", JSON.stringify({ login: true }))
      this.router.navigateByUrl("/home");
      this.utilService.isDisplaySideBar.next(true)

    }
    else {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please enter valid input' });
      this.utilService.isDisplaySideBar.next(false)
    }

  }

}
