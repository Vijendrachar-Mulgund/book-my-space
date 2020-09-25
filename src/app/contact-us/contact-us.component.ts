import { Router } from '@angular/router';
import { ContactUsService } from './../services/contact-us.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private submit: ContactUsService, private router: Router) { }

  ngOnInit(): void {
  }

  sendContent(content) {
    let okStatus = confirm('Are you sure that you want to submit?');
    if (okStatus) {
      this.submit.submitFeedback(content);
      this.router.navigate(['/contact-us/acknowledgement']);
    }
  }

}
