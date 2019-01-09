import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: true
  }),
  Map({
    id: 1,
    text: '지훈이형 강의 듣지롱 희희',
    done: false
  })
]);

export default handleActions({
  [INSERT]: (state, action) => {
    // payload 안의 id, text, done 의 레퍼런스를 만듬. 안만들고 push(Map(actio.payload)) 해도 되지만 나중에 어떤 데이터를 처리하는지 쉽게 보도록 하는 작업
    const { id, text, done } = action.payload;

    return state.push(Map({
      id,
      text,
      done
    }));
  },
  [TOGGLE]: (state, action) => {
    const { payload: index } = action;
    // = const index = action.payload
    // 비구조화 할당으로 index레퍼런스에 action.payload값을 넣음
    // 필수는 아닌데, 나중에 보면 여기서 payload가 어떤 값을 의미하는지 쉽게 이해할 수 있음
    // updateIN으로 현재값을 참조하여 반대값으로 설정
    return state.updateIn([index, 'done'], done => !done);
  },
  [REMOVE]: (state, action) => {
    const { payload: index } = action;
    return state.delete(index);
  }
}, initialState);
