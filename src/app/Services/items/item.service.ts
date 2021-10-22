import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url=environment.serverURL

  constructor(private http:HttpClient) { }

  getItemList(){
    return this.http.get(`${this.url}a68dddfb-9b88-41b0-b344-b1925f6aeafb`);
  }

  addItemInList(data:any){
    return this.http.put(`${this.url}a68dddfb-9b88-41b0-b344-b1925f6aeafb?apiKey=b5b493ca-86a1-47b5-ad0a-b5dd665960d7`,data)
  }
}
