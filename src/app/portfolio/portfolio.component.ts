import { Component, OnInit, Input } from '@angular/core';
import { conversions } from './../../app/shared/utilities/conversions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../shared/services/apiservice';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MessageService } from '../shared/services/messageservice';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  providers: [ApiService, conversions, MessageService],
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // @Input() data: string;
  public res: any;
  public resmessage: string;
  public contactForm: FormGroup;
  public _postEmailUrl: string = 'https://formspree.io/f/xleoowly';

  constructor(private conversion: conversions, private apiService: ApiService,
    private http: HttpClient, private formBuilder: FormBuilder,
    private messageService: MessageService, private toastr: ToastrService,) {
    this.conversion.loadScripts();
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      messages: new FormControl('')
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    let email = this.contactForm.value;
    this.apiService.methodPost(this._postEmailUrl, email)
      .subscribe(response => {
        this.res = response;

        if (this.res.ok) {
          alert("Message sent!");
          this.reset();
        }
        else {
          alert("Message not sent!");
          this.reset();
        }
      }, error => {
        console.log(error);
      });
  }

  reset() {
    this.contactForm.setValue({
      name: null,
      email: null,
      messages: null
    });
    this.resmessage = null;
  }
  // onSubmit(contactForm: NgForm) {
  //   if (contactForm.valid) {
  //     const email = contactForm.value;
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     this.http.post('https://formspree.io/f/xleoowly',
  //       { name: email.name, replyto: email.email, message: email.messages },
  //       { 'headers': headers }).subscribe(
  //         response => {
  //           this.res = response;
  //           if (this.res.ok) {
  //             alert("Message sent!");
  //             this.messageService.successToaster(this.toastr, 'Message sent!', 'Success');
  //             this.messageService.errorToaster(this.toastr, 'Message not sent!', 'Error');
  //           }
  //         }
  //       );
  //   }
  // }

}
