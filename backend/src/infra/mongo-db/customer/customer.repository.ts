import { Customer } from 'src/domain/customer/customer.entity';
import { Id } from 'src/domain/_shared/value-object/id.vo';
import { CustomerRepository } from '../../../application/customer/customer.repository';

import { MongoClient } from 'mongodb';

import * as CustomerMapper from './customer.mapper';

export class MongoDBCustomerRepository implements CustomerRepository {
  constructor(readonly mongoClient: MongoClient) {}
  collection = this.mongoClient.db().collection('customers');

  async create(customer: Customer): Promise<Customer> {
    await this.collection.insertOne(CustomerMapper.toDb(customer));
    return customer;
  }
  async update(customer: Customer): Promise<Customer> {
    await this.collection.updateOne(
      { _id: customer.id.value },
      { $set: CustomerMapper.toDb(customer) },
    );
    return customer;
  }

  async findByIdOrFail(id: Id<any>): Promise<Customer> {
    const customer = await this.collection.findOne({ _id: id.value });
    if (!customer) {
      throw new Error('Customer not found');
    }
    return CustomerMapper.fromDb(customer);
  }
  async findAll(): Promise<Customer[]> {
    const customers = await this.collection.find().toArray();
    return customers.map(CustomerMapper.fromDb);
  }
  async delete(customer: Customer): Promise<void> {
    await this.collection.deleteOne({ _id: customer.id.value });
  }
}
