import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public contactIdDetails: number;

  public addNewContact() {
    this.contactIdDetails = 0;
  }

  public openDetails(id: number) {
    this.contactIdDetails = id;
  }
}
