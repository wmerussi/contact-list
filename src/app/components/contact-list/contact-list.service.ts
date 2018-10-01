import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** rxjs */
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
};

const url = 'http://localhost:3000/contacts';

@Injectable()
export class ContactListService {
  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get(url, httpOptions);
  }
}
