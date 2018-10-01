import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/** Services */
import { ContactListService } from './contact-list.service';

/** Models */
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactListService],
})
export class ContactListComponent implements OnInit {
  @Input() public set newContact(contact: Contact) {
    if (!contact) { return; }
    this.contactList.push(contact);
  }

  @Input() public contactList: Array<Contact> = [];
  @Output() public onNewContact: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onOpenDetails: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: ContactListService) { }

  ngOnInit() {
    this.service.get().subscribe(res => this.contactList = res.map(c => new Contact(c)));
  }

  public addNewContact() {
    this.onNewContact.emit();
  }

  public openDetails(id: number) {
    this.onOpenDetails.emit(id);
  }
}
