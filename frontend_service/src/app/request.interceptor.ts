import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('mht')) {
      const token = localStorage.getItem('accessToken');
      const apiReq = request.clone(
        {
          url: 'https://pharmaref.online/' + request.url,
          setHeaders: token ? { Authorization: 'Bearer ' + token } : {}
        },
      );
      return next.handle(apiReq).pipe(
        tap((httpEvent: HttpEvent<any>) => {}),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
    } else {
      const token = localStorage.getItem('accessToken');
      const apiReq = request.clone(
        {
          url: environment.API_URL + request.url,
          setHeaders: token ? { Authorization: 'Bearer ' + token } : {}
        },
      );
      return next.handle(apiReq).pipe(
        tap((httpEvent: HttpEvent<any>) => {}),
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      );
    }
  }
}