import { Customer } from './domain/customer/customer.entity';
import { Address } from './domain/_shared/value-object/address.vo';
import { Cpf } from './domain/_shared/value-object/cpf.vo';
import { Email } from './domain/_shared/value-object/email.vo';
import { Phone } from './domain/_shared/value-object/phone.vo';

const customer = Customer.create({
  name: 'John Doe',
  email: Email.of('jd@email.com'),
  phone: Phone.of('88993326479'),
  address: Address.of({
    street: 'Rua A',
    number: '123',
    complement: 'Complement',
    neighborhood: 'Centro',
    city: 'Morada Nova',
    state: 'Ceará',
    country: 'Brasil',
    zipCode: '62940000',
    reference: 'Reference',
  }),
  cpf: Cpf.of('55235833082'),
});

console.log(customer);
