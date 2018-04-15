import { combineReducers } from 'redux';
import TodoList from './todoList';

const rootReducer = combineReducers({
    todoList: TodoList
});
export default rootReducer;
