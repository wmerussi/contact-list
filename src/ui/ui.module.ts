import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SectionComponent } from './components/section/section.component';
import { ThumbDescriptionComponent } from './components/thumb-description/thumb-description.component';

@NgModule({
  declarations: [
    SectionComponent,
    ThumbDescriptionComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    SectionComponent,
    ThumbDescriptionComponent,
  ],
})
export class UiModule { }
