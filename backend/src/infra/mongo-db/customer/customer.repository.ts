import { Paged, PagedParams } from './../../../domain/_shared/paged';
import { Customer } from 'src/domain/customer/customer.entity';
import { Id } from 'src/domain/_shared/value-object/id.vo';
import { CustomerRepository } from '../../../application/customer/customer.repository';

import { MongoClient } from 'mongodb';

import * as CustomerMapper from './customer.mapper';
import { EntityNotFoundError } from 'src/domain/_shared/errors/entity-not-found-error';

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
      throw EntityNotFoundError.ofId(Customer, id);
    }
    return CustomerMapper.fromDb(customer);
  }
  async findAll(pagination: PagedParams): Promise<Paged<Customer>> {
    const [total, customers] = await Promise.all([
      this.collection.countDocuments(),
      this.collection
        .aggregate([{ $skip: pagination.offset }, { $limit: pagination.limit }])
        .toArray(),
    ]);
    return Paged.of(customers.map(CustomerMapper.fromDb), total, pagination);
  }
  async delete(customer: Customer): Promise<void> {
    await this.collection.deleteOne({ _id: customer.id.value });
  }
}
