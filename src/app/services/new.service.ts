import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  currentApiKey = environment.gaurdianApiKey;
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(
      `https://content.guardianapis.com/search?api-key=${this.currentApiKey}`
    );
  }
}
