import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getToken(model) {
    return this.http.post('tokens', model);
  }

  validateToken() {
    return this.http.get('tokens');
  }
}
