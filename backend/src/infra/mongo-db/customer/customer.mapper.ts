import { Customer } from 'src/domain/customer/customer.entity';
import { Address } from 'src/domain/_shared/value-object/address.vo';
import { Cpf } from 'src/domain/_shared/value-object/cpf.vo';
import { Email } from 'src/domain/_shared/value-object/email.vo';
import { Phone } from 'src/domain/_shared/value-object/phone.vo';
import { UUID4 } from 'src/domain/_shared/value-object/uuid4.vo';

export function fromDb(fields: any): Customer {
  return Customer.create({
    id: UUID4.of(fields._id),
    name: fields.name,
    email: Email.of(fields.email),
    phone: Phone.of(fields.phone),
    address: Address.of(fields.address),
    cpf: Cpf.of(fields.cpf),
  });
}

export function toDb(entity: Customer) {
  return {
    _id: entity.id.value,
    name: entity.name,
    email: entity.email.value,
    phone: entity.phone.value,
    address: entity.address.value,
    cpf: entity.cpf.value,
  };
}
