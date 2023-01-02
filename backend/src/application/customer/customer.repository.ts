import { Customer } from '../../domain/customer/customer.entity';

export interface CustomerRepository {
  create(customer: Customer): Promise<Customer>;
  update(customer: Customer): Promise<Customer>;
  findByIdOrFail(id: Customer['id']): Promise<Customer>;
  findAll(): Promise<Customer[]>;
  delete(customer: Customer): Promise<void>;
}
