import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly url = '';

  constructor(
    private readonly http: HttpClient
  ) { }

  createUser(model) {
    return this.http.post('users', model);
  }
}
