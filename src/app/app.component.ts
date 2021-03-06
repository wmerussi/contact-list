import { Component } from '@angular/core';

/** Models */
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contactIdDetails: number;
  public newContact: Contact;
  public removedContact: number;

  public addContact(contact: Contact) {
    this.newContact = contact;
  }

  public addNewContact() {
    this.contactIdDetails = 0;
  }

  public deleteContact(id: number) {
    this.removedContact = id;
  }

  public openDetails(id: number) {
    this.contactIdDetails = id;
  }
}
