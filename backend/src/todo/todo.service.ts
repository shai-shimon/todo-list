import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { v4 as uuidv4 } from 'uuid';
import { fail, IAction, IResult, success } from 'src/shared';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodoService implements IAction<TodoDto> {
    constructor(@Inject(CACHE_MANAGER) private cache: Cache) { }

    async add(payload?: TodoDto): Promise<IResult<TodoDto>> {
        payload.id = uuidv4();
        payload.created = new Date();
        return this.cache
            .set(payload.id, JSON.stringify(payload))
            .then(() => success(payload))
            .catch((err) => fail(err));
    }
    async edit(payload?: TodoDto): Promise<IResult<TodoDto>> {
        return this.cache
            .set(payload.id, JSON.stringify(payload))
            .then(() => success(payload))
            .catch((err) => fail(err));
    }
    async remove(key?: string): Promise<IResult<TodoDto>> {
        return this.cache.del(key)
            .then((res) => success(res))
            .catch((err) => fail(err));
    }
    async all(): Promise<IResult<TodoDto[]>> {
        const keys = await this.cache.store.keys();
        let todoList: TodoDto[] = [];

        for await (const key of keys) {
            const task: string = await this.cache.get(key)
            todoList.push(JSON.parse(task))
        }
        return success(todoList)
    }

    async get(key?: string): Promise<IResult<TodoDto>> {
        return this.cache.get(key)
            .then((res) => success(res))
            .catch((err) => fail(err));
    }
}
