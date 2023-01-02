import { UUID4 } from 'src/domain/_shared/value-object/uuid4.vo';
import {
  Command,
  CommandHandler,
} from '../../../domain/_shared/commad-handler';

import { CustomerRepository } from '../customer.repository';

export class DeleteCustomerCommand extends Command {
  constructor(readonly id: string) {
    super();
  }
}

export class DeleteCustomerHandler
  implements CommandHandler<DeleteCustomerCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: DeleteCustomerCommand): Promise<void> {
    const customer = await this.customerRepository.findByIdOrFail(
      UUID4.of(command.id),
    );
    return this.customerRepository.delete(customer);
  }
}
