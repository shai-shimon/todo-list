import axios from 'axios';
import { ITodo } from '../interfaces/todo.interface';

const getAll = async (): Promise<ITodo[]> => (await axios.get<ITodo[]>(process.env.REACT_APP_URL + "all")).data

const add = async (task: ITodo) => await axios
    .post<ITodo>(process.env.REACT_APP_URL!, task)
    .then(res => res.data)
    .catch(err => err)

const get = async (key: string) => await axios
    .get<ITodo>(`${process.env.REACT_APP_URL}by/${key}`)
    .then(res => res.data)
    .catch(err => err)

const remove = async (key: string) => await axios.delete(`${process.env.REACT_APP_URL}${key}`)

export { getAll, add, get, remove }