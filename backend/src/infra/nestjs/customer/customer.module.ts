import { CustomerRepository } from './../../../application/customer/customer.repository';
import { CreateCustomer } from './../../../application/customer/story/create-customer.story';
import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { MongoDBCustomerRepository } from 'src/infra/mongo-db/customer/customer.repository';
import { CustomerController } from './customer.controller';
import { FindAllCustomers } from 'src/application/customer/story/find-all-customers.story';
import { FindCustomerById } from 'src/application/customer/story/find-customer-by-id.story';
import { DeleteCustomer } from 'src/application/customer/story/delete-customer.story';
import { UpdateCustomer } from 'src/application/customer/story/update-customer.story';

@Module({
  imports: [],
  providers: [
    {
      provide: CustomerRepository,
      useFactory: (mongoClient) => new MongoDBCustomerRepository(mongoClient),
      inject: [MongoClient],
    },
    {
      provide: CreateCustomer.Handler,
      useFactory: (repo) => new CreateCustomer.Handler(repo),
      inject: [CustomerRepository],
    },
    {
      provide: FindAllCustomers.Handler,
      useFactory: (repo) => new FindAllCustomers.Handler(repo),
      inject: [CustomerRepository],
    },
    {
      provide: FindCustomerById.Handler,
      useFactory: (repo) => new FindCustomerById.Handler(repo),
      inject: [CustomerRepository],
    },
    {
      provide: DeleteCustomer.Handler,
      useFactory: (repo) => new DeleteCustomer.Handler(repo),
      inject: [CustomerRepository],
    },
    {
      provide: UpdateCustomer.Handler,
      useFactory: (repo) => new UpdateCustomer.Handler(repo),
      inject: [CustomerRepository],
    },
  ],
  controllers: [CustomerController],
  exports: [
    CustomerRepository,
    CreateCustomer.Handler,
    FindAllCustomers.Handler,
    FindCustomerById.Handler,
    DeleteCustomer.Handler,
    UpdateCustomer.Handler,
  ],
})
export class CustomerModule {}
