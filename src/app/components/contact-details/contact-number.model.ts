import { Model } from '../../models/model';

export class ContactNumber extends Model {
  public id: number;
  public number: string;

  constructor(obj?: any) {
    super(obj);
  }
}
