import { Paged, PagedParams } from './../../../domain/_shared/paged';
import { Customer } from '../../../domain/customer/customer.entity';
import {
  CommandData,
  CommandHandler,
} from '../../../domain/_shared/commad-handler';

import { CustomerRepository } from '../customer.repository';

export namespace FindAllCustomers {
  export class Command extends CommandData {
    pagination: PagedParams;

    constructor({ pagination }: { pagination: PagedParams }) {
      super();
      this.pagination = pagination;
    }
  }

  export class Handler implements CommandHandler<Command> {
    constructor(private readonly customerRepository: CustomerRepository) {}

    async execute(command: Command): Promise<Paged<Customer>> {
      return await this.customerRepository.findAll(command.pagination);
    }
  }
}
