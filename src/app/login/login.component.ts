import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UtilService } from '../common/util.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  confirmPassword = "";
  name = "";
  signupWindow = false;
  warning = false;
  userData: any = "";
  user: any = "";
  newAccount = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });
  userList: any = []


  constructor(
    private router: Router,
    private messageService: MessageService,
    private utilService: UtilService,
    private fb: FormBuilder) {
    this.userData = localStorage.getItem("userData");
    this.userList = JSON.parse(this.userData) || [];

  }

  ngOnInit(): void {
  }

  onLogin() {

    console.log(this.userList, this.email)
    const activeUser = this.userList.filter((user: any) => user.email === this.email && user.password===this.password)
    console.log(activeUser)
    if (activeUser.length>0) {
      localStorage.setItem("login", JSON.stringify({ login: true }))
      this.router.navigateByUrl("/home");
      this.utilService.isDisplaySideBar.next(true)

    }
    else {
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Please enter valid input' });
      this.utilService.isDisplaySideBar.next(false)
    }

  }

  newAccountAdd() {
    if (this.newAccount.value.password === this.newAccount.value.confirmPassword) {

      console.log(this.newAccount.value)
      this.userList.push(this.newAccount.value)
      localStorage.setItem("userData", JSON.stringify(this.userList))
      this.signupWindow = false;
    }
    else {
      console.log("password not matched")
      this.signupWindow = true;
      this.warning = true;
      this.messageService.add({ severity: 'error', key: "tc", summary: 'Error', detail: 'Password Not Matched' });
    }
  }

  onSignup() {
    this.signupWindow = true;

  }
}
// export function ConfirmedValidator(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//     const control: any = formGroup.controls[controlName];
//     const matchingControl: any = formGroup.controls[matchingControlName];
//     // if (matchingControl.error && !matchingControl.errors.confirmedValidator) {
//     //     return;
//     // }
//     // if (control.value !== matchingControl.value) {
//     //     matchingControl.setErrors({ confirmedValidator: true });
//     // } else {
//     //     matchingControl.setErrors(null);
//     // }
//   }
// }