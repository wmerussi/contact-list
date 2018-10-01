import { Model } from './model';

export class Contact extends Model {
  public id: number;
  public name: string;
  public emails: Array<string>;
  public phones: Array<string>;
  public whatsapp: Array<string>;

  constructor(obj?: any) {
    super(obj);

    this.phones = !!this.phones ? this.phones : [];
    this.emails = !!this.emails ? this.emails : [];
    this.whatsapp = !!this.whatsapp ? this.whatsapp : [];
  }

  public get firstLetter(): string {
    if (!this.name) { return ''; }
    return this.name[0];
  }
}
