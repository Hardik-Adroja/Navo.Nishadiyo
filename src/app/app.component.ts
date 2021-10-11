import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'my-app';
//   timer=0;
//   secondValue = 0;
//   isDisplay = true;
//   onclick() {
//     if (this.secondValue > 0) {
//       this.isDisplay = false;
//       const timing = setInterval(()=>{
//         if (this.secondValue > 0) {
//           this.secondValue--,
//           this.timer = this.secondValue;
//         }
//         else {
//           clearInterval(timing);
//           this.isDisplay = true;
//         }
//       },1000)
//     }
//   }
  


//   ngOnInit() {
//   //   let time = 15;
//   //   setInterval (()=>{
//   //     if (time > 0) {
//   //       time--;
//   //       this.timer = time;
//   //     }
//   //     else {
//   //       clearInterval ();
//   //       alert("By By")
//   //     }
//   //   }, 1000)

//   }
//   ngOnDestroy() {
//   //   alert("Get Off")
//   }

  
// }
export class AppComponent {
  message = 'I\'m read only!';
  canEdit = true;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }
}

