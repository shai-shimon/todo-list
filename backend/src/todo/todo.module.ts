import { CacheModule, Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import * as redisStore from 'cache-manager-redis-store';
import { list } from './todo.setup';
import { TodoDto } from './todo.dto';
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'redis-18223.c55.eu-central-1-1.ec2.cloud.redislabs.com',
      port: 18223,
      max: 41414141,
      ttl: 80808080,
      password: 'NiNXD0R582w6Q8tDDT6jjr8BuyfprF8U'
    }),
  ],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {
  constructor(private service: TodoService) {
    // Init Todo
    this.setup();
  }
  setup() {
    this.service.clear();
    list.forEach((task: TodoDto) => {
      this.service.add(task)
    })
  }
}
