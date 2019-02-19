import { createAction, createStandardAction, action } from "typesafe-actions";
import { produce } from "immer";
import { Action } from "redux";

export const CREATE = 'todoList/CREATE';
export type CREATE = {
  text: string;
};
export class Create implements Action {
  readonly type = CREATE;
  constructor(
    public payload: CREATE
  ) {}
};

export const REMOVE = 'todoList/REMOVE';
export type REMOVE = {
  id: number;
};
export class Remove implements Action {
  readonly type = REMOVE;
  constructor(
    public payload: REMOVE
  ) {}
}

export const TOGGLE = 'todoList/TOGGLE';
export type TOGGLE = {
  id: number;
};
export class Toggle implements Action {
  readonly type = TOGGLE;
  constructor(
    public payload: TOGGLE
  ) {}
};

export const CHANGE_INPUT = 'todoList/CHANGE_INPUT';
export type CHANGE_INPUT = {
  text: string;
};
export class ChangeInput implements Action {
  readonly type = CHANGE_INPUT;
  constructor(
    public payload: CHANGE_INPUT
  ) {}
};

export const actionCreators = {
  // create: createStandardAction(CREATE)<string>(),
  create: createAction(CREATE, action => (text: string) => action({ text })),
  remove: createAction(REMOVE, action => (id: number) => action({ id })),
  toggle: createAction(TOGGLE, action => (id: number) => action({ id })),
  changeInput: createAction(CHANGE_INPUT, action => (text: string) => action({ text })),
};

export type TodoListActions =
  Create |
  Remove |
  Toggle |
  ChangeInput
;

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoListState {
  input: string;
  todos: TodoItem[];
}

const initialState: TodoListState = {
  input: '',
  todos: [
    {
      id: 0,
      text: 'First',
      done: false,
    },
    {
      id: 1,
      text: 'Second',
      done: true,
    },
  ],
};

let id: number = 2;

const todoListReducer = (state: TodoListState = initialState, action: TodoListActions) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE:
        console.log(action)
        draft.todos.push({
          id: id++,
          text: action.payload.text,
          done: false,
        });
        break;
      case REMOVE:
        console.log(action, state)
        draft.todos = state.todos.filter((item, idx) => item.id !== action.payload.id);
        break;
      case TOGGLE:
        draft.todos.map((item, idx) => {
          if (item.id === action.payload.id) {
            item.done = !item.done
          }
        });
        break;
      case CHANGE_INPUT:
        draft.input = action.payload.text;
        break;
      default:
        state;
        break;
    };
  });

export default todoListReducer;
