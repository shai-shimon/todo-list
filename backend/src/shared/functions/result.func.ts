import { IResult } from '..';

const success = <T>(data?: T, message?: string): IResult<T> => {
    return {
        ok: true,
        message: message,
        data: data
    }
}

const fail = (error: Error): IResult<undefined> => {
    return {
        ok: true,
        error: error
    }
}
export { success, fail }