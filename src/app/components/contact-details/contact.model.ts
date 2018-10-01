import { Model } from '../../models/model';

import { Email } from './email.model';
import { ContactNumber } from './contact-number.model';

export class Contact extends Model {
  public id: number;
  public name: string;
  public emails: Array<Email>;
  public phones: Array<ContactNumber>;
  public whatsapp: Array<ContactNumber>;

  constructor(obj?: any) {
    super(obj);

    this.phones = this.phones ? this.phones.map(p => new ContactNumber(p)) : [];
    this.emails = this.emails ? this.emails.map(e => new Email(e)) : [];
    this.whatsapp = this.whatsapp ? this.whatsapp.map(w => new ContactNumber(w)) : [];
  }

  public get nextEmailId(): number {
    return this.emails.reduce((newId, email) => email.id > newId ? email.id : newId , 1) + 1;
  }

  public get nextPhoneId(): number {
    return this.phones.reduce((newId, phone) => phone.id > newId ? phone.id : newId , 1) + 1;
  }

  public get nextWhatsappId(): number {
    return this.whatsapp.reduce((newId, whatsapp) => whatsapp.id > newId ? whatsapp.id : newId , 1) + 1;
  }
}
