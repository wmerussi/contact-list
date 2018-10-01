import { Component, Input } from '@angular/core';

import { Contact } from './contact.model';
import { Email } from './email.model';
import { ContactNumber } from './contact-number.model';

import _ from 'lodash';

const contactList = [
  {
    id: 1,
    name: 'Valéria Merussi',
    phones: [
      { id: 1, number: '11 9 5577-1040' },
    ],
    emails: [
      { id: 1, address: 'valeriamerussi@gmail.com' },
    ],
    whatsapp: [
      { id: 1, number: '11 9 5577-1040' },
    ],
  },
  {
    id: 2,
    name: 'William Merussi',
    phones: [
      { id: 1, number: '11 9 7519-3787' },
    ],
    emails: [
      { id: 1, address: 'wmerussi@gmail.com' },
    ],
    whatsapp: [
      { id: 1, number: '11 9 7519-3787' },
    ],
  },
];

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent {
  public contact: Contact = new Contact();

  public newPhone: string;
  public newEmail: string;
  public newWhatsapp: string;

  @Input() set contactId(id: number) {
    if (!id || id === 0) {
      this.contact = new Contact();
      return;
    }

    this.showDetails(id);
  }

  public addEmail(address: string) {
    this.contact.emails.push(new Email({ id: this.contact.nextEmailId, address }));
    this.newEmail = '';
  }

  public addPhone(number: string) {
    this.contact.phones.push(new ContactNumber({ id: this.contact.nextPhoneId, number }));
    this.newPhone = '';
  }

  public addWhatsapp(number: string) {
    this.contact.whatsapp.push(new ContactNumber({ id: this.contact.nextWhatsappId, number }));
    this.newWhatsapp = '';
  }

  public getFirstLetter(value: string): string {
    if (!value) { return ''; }
    return value[0];
  }

  public removePhone(id: number) {
    this.contact.phones = _.remove(this.contact.phones, p => p.id !== id);
  }

  public removeEmail(id: number) {
    this.contact.emails = _.remove(this.contact.emails, e => e.id !== id);
  }

  public removeWhatsapp(id: number) {
    this.contact.whatsapp = _.remove(this.contact.whatsapp, w => w.id !== id);
  }

  public save() {
    // TODO: Create service to save data on API
    console.log('save contact', this.contact);
  }

  public showDetails(id: number) {
    // TODO: Create service to get data from API
    this.contact = new Contact(contactList.find(contact => contact.id === id));
  }
}
