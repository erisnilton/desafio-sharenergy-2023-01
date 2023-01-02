import { UUID4 } from 'src/domain/_shared/value-object/uuid4.vo';
import {
  Customer,
  CustomerFields,
} from '../../../domain/customer/customer.entity';
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

export class UpdateCustomerCommand extends Command {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: AddressFields;
  cpf?: string;

  constructor(data: {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    address?: AddressFields;
    cpf?: string;
  }) {
    super();
    Object.assign(this, data);
  }
}

export class UpdateCustomerHandler
  implements CommandHandler<UpdateCustomerCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: UpdateCustomerCommand): Promise<Customer> {
    const customer = await this.customerRepository.findByIdOrFail(
      UUID4.of(command.id),
    );

    customer.assign({
      name: command.name,
      email: command.email ? Email.of(command.email) : undefined,
      phone: command.phone ? Phone.of(command.phone) : undefined,
      address: command.address ? Address.of(command.address) : undefined,
      cpf: command.cpf ? Cpf.of(command.cpf) : undefined,
    });

    return this.customerRepository.update(customer);
  }
}
