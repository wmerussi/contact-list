import { Component, EventEmitter, Input, Output } from '@angular/core';

/** Services */
import { ContactDetailsService } from './contact-details.service';

/** Models */
import { Contact } from '../../models/contact.model';

import _ from 'lodash';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  providers: [ContactDetailsService],
})
export class ContactDetailsComponent {
  @Output() public onAdd: EventEmitter<Contact> = new EventEmitter<Contact>();

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

  constructor(private service: ContactDetailsService) { }

  public addEmail(address: string) {
    this.contact.emails.push(address);
    this.newEmail = '';
  }

  public addPhone(number: string) {
    this.contact.phones.push(number);
    this.newPhone = '';
  }

  public addWhatsapp(number: string) {
    this.contact.whatsapp.push(number);
    this.newWhatsapp = '';
  }

  public removePhone(number: number) {
    this.contact.phones = _.remove(this.contact.phones, p => p !== number);
  }

  public removeEmail(address: number) {
    this.contact.emails = _.remove(this.contact.emails, e => e !== address);
  }

  public removeWhatsapp(number: number) {
    this.contact.whatsapp = _.remove(this.contact.whatsapp, w => w !== number);
  }

  public save() {
    if (!this.contact.id) {
      return this.service.add(this.contact).subscribe((res) => {
        console.log(res);
        this.contact.id = res.id;
        this.onAdd.emit(this.contact);
      });
    }

    this.service.update(this.contact).subscribe(console.log, console.log);
  }

  public showDetails(id: number) {
    this.service.get(id).subscribe(contact => this.contact = new Contact(contact));
  }
}
