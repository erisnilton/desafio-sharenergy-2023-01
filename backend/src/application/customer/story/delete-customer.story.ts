import { UUID4 } from 'src/domain/_shared/value-object/uuid4.vo';
import {
  CommandData,
  CommandHandler,
} from '../../../domain/_shared/commad-handler';

import { CustomerRepository } from '../customer.repository';

export namespace DeleteCustomer {
  export class Command extends CommandData {
    constructor(readonly id: string) {
      super();
    }
  }

  export class Handler implements CommandHandler<Command> {
    constructor(private readonly customerRepository: CustomerRepository) {}

    async execute(command: Command): Promise<void> {
      console.log('Verificando se o cliente existe: ', command.id);
      const customer = await this.customerRepository.findByIdOrFail(
        UUID4.of(command.id),
      );
      console.log('Deletando cliente: ', customer);
      return this.customerRepository.delete(customer);
    }
  }
}
