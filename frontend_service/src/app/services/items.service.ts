import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  readonly itemsList = new BehaviorSubject([] as any); 

  constructor(
    private readonly http: HttpClient
  ) { }

  getItems(query) {
    return this.http.get('/drugs', { params: { term: query } } )
  }

  getItemFile(url: string) {
    return this.http.get('mht2/' + url, {responseType: 'blob', observe: 'response'});
  }

  getMht(url: string) {
    return this.http.post("mht/", {url: url});
  }
}
