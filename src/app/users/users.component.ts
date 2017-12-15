import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {UsersSearchService} from '../shared/services/users-search.service';
import {Router} from '@angular/router';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  heroes: Observable<any>;
  private searchTerms = new Subject<string>();
  data2 = [];
  data3 = [];
  constructor(
    private usersSearchService: UsersSearchService,
    private router: Router) {
    localStorage.removeItem('selectedUser');
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.usersSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<any>())
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any>();
      });
    this.heroes.subscribe((response) => {
      console.log('here we are');
      this.data2.push(response.items);
      this.data2.forEach((data) => {
        this.data3 = data;
      });
      console.log(this.data3);
    });
  }
  gotoUserDetails(item): void {
    localStorage.setItem('selectedUser', JSON.stringify(item));
    this.router.navigate(['/user-details']);
  }
}
