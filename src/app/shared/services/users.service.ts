import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) {}

  getUserOrganizationDetails(url): Promise<any[]> {
    return this.http.get(url).toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  }
  getMoreUserInfo(url): Promise<any[]> {
    return this.http.get(url).toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  }
  getReposInfo(url): Promise<any[]> {
    return this.http.get(url).toPromise()
      .then(response => response.json() as any[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
