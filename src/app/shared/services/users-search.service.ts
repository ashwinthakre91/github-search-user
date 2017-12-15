import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<any> {
    return this.http
      .get(`https://api.github.com/search/users?q=${term}`)
      .map(response => response.json() as any);
  }
}
