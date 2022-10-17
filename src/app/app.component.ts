import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { conversions } from '../../src/app/shared/utilities/conversions';
//providers: [conversions],
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'pfsbhowmikv1';
  // message: 'Welcome';
  debugger
  myFileName = 'cv_sreemonta_bhowmik.pdf';
  fileUrl = 'assets/docs/cv_sreemonta_bhowmik.pdf'

}
// export class AppComponent  implements OnInit {
//   title = 'pfsbhowmikv1';
//     constructor(private router: Router) {

//     }

//     ngOnInit(): void {

//     }


//   linktoContact(){
//     this.router.navigateByUrl('/portfolio');
//   }
// }
