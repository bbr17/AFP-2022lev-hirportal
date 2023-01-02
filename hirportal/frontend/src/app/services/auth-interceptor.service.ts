import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      // token exists
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(clonedReq);
    } else {
      // token does not exist
      return next.handle(req);
    }
  }
}
