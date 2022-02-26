import { createContext, useReducer, useEffect } from 'react';
import { getAll } from '../rest/todo.rest';
import { TodoAction } from './actions';
import { taskReducer, todoReducer, toggleReducer } from './reducers';

const AppContext = createContext();

const AppProvider = (props) => {
	const [ toggles, setToggles ] = useReducer(toggleReducer, {
		dialog: false
	});

	const [ todoList, setTodoList ] = useReducer(todoReducer);
	const [ task, setTask ] = useReducer(taskReducer);

	useEffect(() => {
		getAll().then((res) => {
			setTodoList({
				type: TodoAction.init,
				list: res.data
			});
		});
	}, []);
	return (
		<AppContext.Provider
			value={{
				toggles,
				setToggles,
				todoList,
				setTodoList,
				task,
				setTask
			}}
		>
			{props.children}{' '}
		</AppContext.Provider>
	);
};
export { AppProvider, AppContext };
