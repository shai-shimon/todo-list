import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo/todo.module';

enum Port {
  todo = 5000,
}
const service = async <M>(module: M, port: Port) => {
  const app = await NestFactory.create(module);
  app.enableCors();
  await app.listen(port);
};

service(TodoModule, Port.todo);
