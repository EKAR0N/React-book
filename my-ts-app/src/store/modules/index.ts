import { combineReducers } from "redux";
import counterReducer, { CounterState } from './counter';
import todoListReducer, { TodoListState } from './todoList';

export default combineReducers({
  counterReducer,
  todoListReducer,
});

export interface StoreState {
  counterReducer: CounterState;
  todoListReducer: TodoListState;
};
