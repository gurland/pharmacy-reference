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
    return this.http.post("mht/", {url: "http://www.drlz.com.ua/ibp/lz_www.nsf/id/B16D276FB489E0194225877A002BFA09/$file/UA64210101_20E3.mht"});
  }
}
