import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

// action tpyes
const CHANGE_INPUT = 'waiting/CHANGE_INPUT'
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

let id = 3;
// actions creators
export const changeInput = createAction(CHANGE_INPUT, text => text);
// eslint-disable-next-line no-plusplus
export const create = createAction(CREATE, text => ({ text, id: id++ }));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

// initial State
const initialState = {
  input: '',
  list: [
    {
      id: 0,
      name: '홍길동',
      entered: true
    },
    {
      id: 1,
      name: '콩쥐',
      entered: false
    },
    {
      id: 2,
      name: '팥쥐',
      entered: false
    }
  ]
}

// handleActions 를 사용한 리듀서
export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => {
      produce(state, draft => {
        draft.input = action.payload
      });
    },
    [CREATE]: (state, action) => {
      produce(state, draft => {
        draft.list.push({
          id: action.payload.id,
          name: action.payload.text,
          entered: false
        });
      });
    },
    [ENTER]: (state, action) => {
      produce(state, draft => {
        const item = draft.list.find(item => item.id === action.payload);
        item.entered = !item.entered;
      });
    },
    [LEAVE]: (state, action) => {
      produce(state, draft => {
        draft.list.splice(
          draft.list.findIndex(item => item.id === action.payload),
          1
        );
      });
    },
  },
  initialState
);
