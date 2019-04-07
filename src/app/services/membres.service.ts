import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembresService implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  getAll() {
    return this.httpClient.get('http://localhost:3000/membres');
  }
}
