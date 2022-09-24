import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    console.log(token);
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