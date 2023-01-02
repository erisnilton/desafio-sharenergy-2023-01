import { UUID4 } from 'src/domain/_shared/value-object/uuid4.vo';
import { Customer } from '../../../domain/customer/customer.entity';
import {
  Command,
  CommandHandler,
} from '../../../domain/_shared/commad-handler';

import { CustomerRepository } from '../customer.repository';

export class FindCustomerByIdCommand extends Command {
  constructor(readonly id: string) {
    super();
  }
}

export class FindCustomerByIdHandler
  implements CommandHandler<FindCustomerByIdCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: FindCustomerByIdCommand): Promise<Customer> {
    const customer = await this.customerRepository.findByIdOrFail(
      UUID4.of(command.id),
    );
    return customer;
  }
}
