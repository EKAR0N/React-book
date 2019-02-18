import { action, createAction, createStandardAction } from 'typesafe-actions';
import { produce } from 'immer';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// const INCREMENT = 'counter/INCREMENT';
// const DECREMENT = 'counter/DECREMENT';

export const actionCreators = {
  // increment: () => action(INCREMENT),
  // decrement: () => action(DECREMENT),
  // increment: createAction(INCREMENT),
  // decrement: createAction(DECREMENT),
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
  // increment: createStandardAction(INCREMENT)<void>(),
  // decrement: createStandardAction(DECREMENT)<void>(),
};

export type CounterActions = { type: 'counter/INCREMENT' } | { type: 'counter/DECREMENT' };

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// export default handleActions<CounterState, CounterActions>(
//   {
//     [INCREMENT]: state => ({ value: state.value + 1 }),
//     [DECREMENT]: state => ({ value: state.value - 1 }),
//   },
//   initialState,
// );

// const reducer: Reducer<CounterState> = handleActions(
//   {
//     [INCREMENT]: (state: CounterState) => ({ value: state.value + 1}),
//     [DECREMENT]: (state: CounterState) => ({ value: state.value}),
//   },
//   initialState
// );

const counterReducer = (
  state: CounterState = initialState,
  action: CounterActions,
) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.value = state.value + 1;
        console.log(actionCreators.increment);
        break;
      case DECREMENT:
        draft.value = state.value - 1;
        console.log(actionCreators.decrement);
        break;
      default:
        break;
    }
  });

export default counterReducer;
