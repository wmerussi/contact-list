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

  public addContact(contact: Contact) {
    this.newContact = contact;
  }

  public addNewContact() {
    this.contactIdDetails = 0;
  }

  public openDetails(id: number) {
    this.contactIdDetails = id;
  }
}
