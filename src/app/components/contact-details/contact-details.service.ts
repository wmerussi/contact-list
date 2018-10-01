import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** Models */
import { Contact } from '../../models/contact.model';

/** rxjs */
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

const url = 'http://localhost:3000';

@Injectable()
export class ContactDetailsService {
  constructor(private http: HttpClient) { }

  public add(contact: Contact): Observable<any> {
    return this.http.post(`${ url }/contacts`, JSON.stringify(contact), httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${ url }/contact/${ id }`, httpOptions);
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${ url }/contact/${ id }`, httpOptions);
  }

  public update(contact: Contact): Observable<any> {
    return this.http.put(`${ url }/contact/${ contact.id }`, JSON.stringify(contact), httpOptions);
  }
}
