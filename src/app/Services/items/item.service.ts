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
    return this.http.get(`${this.url}a3a7d438-7597-4de6-85c2-d7468dc61f62`);
  }

  addItemInList(data:any){
    return this.http.put(`${this.url}a3a7d438-7597-4de6-85c2-d7468dc61f62?apiKey=c6bd2bff-94ef-41da-a868-c458fb395c93`,data)
  }
}
