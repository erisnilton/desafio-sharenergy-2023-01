import { Global, Module } from '@nestjs/common';
import { MongoClient, ServerApiVersion } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: MongoClient,
      useFactory: () =>
        new MongoClient(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverApi: ServerApiVersion.v1,
        } as any),
    },
  ],

  exports: [MongoClient],
})
export class MongoModule {}
