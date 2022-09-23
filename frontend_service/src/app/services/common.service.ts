import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly url = '';

  constructor(
    private readonly http: HttpClient
  ) { }

  getData() {
    return this.http.get(`${this.url}/path`)
  }
}
