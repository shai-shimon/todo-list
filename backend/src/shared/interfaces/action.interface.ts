import { IResult } from '.';

export interface IAction<Dto> {
  add(payload?: Dto): Promise<IResult<undefined | Dto>>;
  edit(payload?: Dto): Promise<IResult<undefined | Dto>>;
  remove(key?: any): Promise<IResult<undefined | Dto>>;
  get(key?: any): Promise<IResult<Dto>>;
  all(): Promise<IResult<Dto[]>>;
}
