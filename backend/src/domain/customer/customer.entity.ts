import { ValidationError } from './../_shared/errors/validation-error';
import { Entity, EntityFields } from '../_shared/entity';
import { Address } from '../_shared/value-object/address.vo';
import { Cpf } from '../_shared/value-object/cpf.vo';
import { Email } from '../_shared/value-object/email.vo';
import { Phone } from '../_shared/value-object/phone.vo';

export interface CustomerFields extends EntityFields {
  name: string;
  email: Email;
  phone: Phone;
  address: Address;
  cpf: Cpf;
}

export class Customer extends Entity<CustomerFields> {
  name: string;
  email: Email;
  phone: Phone;
  address: Address;
  cpf: Cpf;

  static create(fields: CustomerFields): Customer {
    const result = new Customer(fields);
    result.validate();
    return result;
  }

  validate(): boolean {
    super.validate();
    if (!this.name) throw ValidationError.of('Invalid name');
    if (!(this.cpf instanceof Cpf)) throw ValidationError.of('Invalid cpf');
    if (!(this.address instanceof Address))
      throw ValidationError.of('Invalid address');
    if (!(this.email instanceof Email))
      throw ValidationError.of('Invalid email');
    if (!(this.phone instanceof Phone))
      throw ValidationError.of('Invalid phone');
    return true;
  }
}
