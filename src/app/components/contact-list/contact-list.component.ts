import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Input() public contactList: Array<any> = [];
  @Output() public onNewContact: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onOpenDetails: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.contactList = [
      { id: 1, name: 'Valéria Merussi', },
      { id: 2, name: 'William Merussi', },
    ];
  }

  public addNewContact() {
    this.onNewContact.emit();
  }

  public getFirstLetter(value: string): string {
    return value[0];
  }

  public openDetails(id: number) {
    this.onOpenDetails.emit(id);
  }
}
