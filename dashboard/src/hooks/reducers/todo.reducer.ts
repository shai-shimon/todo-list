import { TodoAction } from '../actions/todo.action';
const todoReducer = (state: any, action: any) => {
    switch (action.type) {
        case TodoAction.init:
            state = action.list;
            return state;
    }
}
const taskReducer = (state: any, action: any) => {
    switch (action.type) {
        case TodoAction.get:
            state = action.task;
            
            return state;
    }
}
export { todoReducer, taskReducer }