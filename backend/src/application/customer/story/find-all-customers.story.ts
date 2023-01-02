import { Customer } from '../../../domain/customer/customer.entity';
import {
  Command,
  CommandHandler,
} from '../../../domain/_shared/commad-handler';

import { CustomerRepository } from '../customer.repository';

export class FindAllCustomersCommand extends Command {}

export class FindAllCustomersHandler
  implements CommandHandler<FindAllCustomersCommand>
{
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(command: FindAllCustomersCommand): Promise<Customer[]> {
    return await this.customerRepository.findAll();
  }
}
