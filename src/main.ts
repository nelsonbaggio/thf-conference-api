import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {createConnection, Connection} from "typeorm";



async function bootstrap() {
  const connection: Connection = await createConnection({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "test"
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
