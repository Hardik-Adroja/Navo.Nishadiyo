import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialPService {

  url = environment.serverURL

  constructor(private http:HttpClient) { }

  getItemList () {
    return this.http.get(`${this.url}478528a0-7987-4a83-b990-2b8895b70d97`);
  }

  addItemList (item:any) {
    return this.http.put(`${this.url}478528a0-7987-4a83-b990-2b8895b70d97?apiKey=b5b493ca-86a1-47b5-ad0a-b5dd665960d7`, item)
  }


}
