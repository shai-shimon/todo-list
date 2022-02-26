import { CacheModule, Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      max: 41414141,
      ttl: 80808080,
    }),
  ],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
