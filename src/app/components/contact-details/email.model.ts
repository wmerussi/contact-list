import { Model } from '../../models/model';

export class Email extends Model {
  public id: number;
  public address: string;

  constructor(obj?: any) {
    super(obj);
  }
}
