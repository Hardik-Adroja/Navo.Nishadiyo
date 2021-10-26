import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterseptorService implements HttpInterceptor {

  isLoading: any;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (req) {
    //   this.isLoading = true;
    //   console.log(req)
    //   return next.handle(req);
    // }
    return next.handle(req).pipe(map((event:any)=>{
      console.log(event)
      return event
    },(error:any)=>{
      return error
    }));
  }
}

