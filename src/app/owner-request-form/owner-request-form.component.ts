import { Router } from '@angular/router';
import { RequestSubmitService } from './../services/request-submit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-request-form',
  templateUrl: './owner-request-form.component.html',
  styleUrls: ['./owner-request-form.component.css']
})
export class OwnerRequestFormComponent implements OnInit {

  constructor(private reqService: RequestSubmitService, private router: Router) { }

  ngOnInit(): void {
  }

  sendReq(theRequest) {
    let ok = confirm('Are you sure you want to submit?');
    if (ok) {
      this.reqService.saveReqToDataBase(theRequest);
      this.router.navigate(['/requestForm/success']);
    }
  }

}
