import { Paged, PagedParams } from './../../domain/_shared/paged';
import { Customer } from '../../domain/customer/customer.entity';

export interface CustomerRepository {
  create(customer: Customer): Promise<Customer>;
  update(customer: Customer): Promise<Customer>;
  findByIdOrFail(id: Customer['id']): Promise<Customer>;
  findAll(pagination: PagedParams): Promise<Paged<Customer>>;
  delete(customer: Customer): Promise<void>;
}

export abstract class CustomerRepository {}
