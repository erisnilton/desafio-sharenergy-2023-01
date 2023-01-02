import { CustomerFields } from '../../../domain/customer/customer.entity';
import { Customer } from '../../../domain/customer/customer.entity';
import {
  Command,
  CommandHandler,
} from '../../../domain/_shared/commad-handler';
import {
  Address,
  AddressFields,
} from '../../../domain/_shared/value-object/address.vo';
import { Cpf } from '../../../domain/_shared/value-object/cpf.vo';
import { Email } from '../../../domain/_shared/value-object/email.vo';
import { Phone } from '../../../domain/_shared/value-object/phone.vo';
import { CustomerRepository } from '../customer.repository';

export class CreateCustomerCommand extends Command {
  name: string;
  email: string;
  phone: string;
  address: AddressFields;
  cpf: string;

  constructor(data: {
    name: string;
    email: string;
    phone: string;
    address: AddressFields;
    cpf: string;
  }) {
    super();
    Object.assign(this, data);
  }
}

export class CreateCustomerHandler
  implements CommandHandler<CreateCustomerCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: CreateCustomerCommand): Promise<Customer> {
    const customer = Customer.create({
      name: command.name,
      email: Email.of(command.email),
      phone: Phone.of(command.phone),
      address: Address.of(command.address),
      cpf: Cpf.of(command.cpf),
    });
    return this.customerRepository.create(customer);
  }
}
