import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from "react-redux";

export function getRandomColor() {
  const colors = [
    '#495057',
    '#f03e3e',
    '#d6336c',
    '#ae3ec9',
    '#7048e8',
    '#4263eb',
    '#1c7cd6',
    '#1098ad',
    '#0ca678',
    '#37b24d',
    '#74b816',
    '#f59f00',
    '#f76707'
  ];

  const random = Math.floor(Math.random() * 13);

  return colors[random];
}

const mapStateToProps = (state) => ({counters: state.counters});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch(actions.setColor(index, color));
  }
})

const CounterListContianer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContianer;
