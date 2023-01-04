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
      console.log('Verificando se o cliente existe: ', command.id);
      const customer = await this.customerRepository.findByIdOrFail(
        UUID4.of(command.id),
      );
      console.log('Retornando cliente: ', customer);
      return customer;
    }
  }
}
