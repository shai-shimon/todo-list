import { IResult } from ".";

export interface IAction<P, T> {
    add(payload?: P): Promise<IResult<undefined | T>>;
    edit(payload?: P): Promise<IResult<undefined | T>>;
    remove(payload?: P): Promise<IResult<undefined | T>>;
    get(payload?: P): Promise<IResult<T | T[]>>;
}