import { Observable } from 'rxjs';
import { NewService } from './../services/new.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsRes;
  theArticles: [];

  constructor(private news: NewService) { }

  ngOnInit() {
    return this.news.getNews().subscribe(response => {
      console.log(response);
      this.newsRes = response;
      this.theArticles = this.newsRes.response.results;
    });
  }

}


