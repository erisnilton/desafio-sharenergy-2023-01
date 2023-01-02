import {
  FindAllCustomersCommand,
  FindAllCustomersHandler,
} from './application/customer/story/find-all-customers.story';
import {
  CreateCustomerCommand,
  CreateCustomerHandler,
} from './application/customer/story/create-customer.story';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { MongoDBCustomerRepository } from './infra/mongo-db/customer/customer.repository';
import {
  UpdateCustomerHandler,
  UpdateCustomerCommand,
} from './application/customer/story/update-customer.story';
import {
  DeleteCustomerCommand,
  DeleteCustomerHandler,
} from './application/customer/story/delete-customer.story';

const mongoClient = new MongoClient(
  'mongodb+srv://desafiosharenergy:sh4r3n3rgy@cluster0.kvpwh04.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  } as any,
);

const repo = new MongoDBCustomerRepository(mongoClient);
  
new FindAllCustomersHandler(repo)
  .execute(new FindAllCustomersCommand())
  .then(console.log);
