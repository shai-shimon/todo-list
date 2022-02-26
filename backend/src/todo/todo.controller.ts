import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoDto } from './todo.dto';
import { IAction, IResult, success } from 'src/shared';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController implements IAction<TodoDto> {

    constructor(private service: TodoService) { }

    @Post()
    async add(@Body() payload?: TodoDto): Promise<IResult<TodoDto>> {
        return this.service.add(payload);
    }
    @Put()
    async edit(@Body() payload?: TodoDto): Promise<IResult<TodoDto>> {
        return this.service.edit(payload)
    }

    @Delete(":key")
    async remove(@Param() params): Promise<IResult<TodoDto>> {
        return this.service.remove(params.key)
    }
    
    @Get(':key')
    async get(@Param() params): Promise<IResult<TodoDto>> {
        return this.service.get(params.key)
    }
    @Get('all')
    all(): Promise<IResult<TodoDto[]>> {
        return this.service.all();
    }
}
