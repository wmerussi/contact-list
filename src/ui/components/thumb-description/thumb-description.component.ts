import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-thumb-description',
  templateUrl: './thumb-description.component.html',
  styleUrls: ['./thumb-description.component.scss'],
})
export class ThumbDescriptionComponent {
  @Input() description: string;
  @Input() thumb: string;
}
