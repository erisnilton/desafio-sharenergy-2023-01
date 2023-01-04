import { MongoClient, ServerApiVersion } from 'mongodb';
import { CustomerModule } from './customer/customer.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoModule, CustomerModule],
})
export class AppModule {}
