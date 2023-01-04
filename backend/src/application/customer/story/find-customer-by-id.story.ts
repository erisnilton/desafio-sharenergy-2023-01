import { UUID4 } from 'src/domain/_shared/value-object/uuid4.vo';
import { Customer } from '../../../domain/customer/customer.entity';
import {
  CommandData,
  CommandHandler,
} from '../../../domain/_shared/commad-handler';

import { CustomerRepository } from '../customer.repository';

export namespace FindCustomerById {
  export class Command extends CommandData {
    constructor(readonly id: string) {
      super();
    }
  }

  export class Handler implements CommandHandler<Command> {
    constructor(private readonly customerRepository: CustomerRepository) {}

    async execute(command: Command): Promise<Customer> {
      const customer = await this.customerRepository.findByIdOrFail(
        UUID4.of(command.id),
      );
      return customer;
    }
  }
}
