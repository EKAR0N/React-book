import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={(e) => {
        e.preventDefault(); // 우클릭 시 메뉴 열림 방지
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{
        backgroundColor: color
      }}>
        {number}
      </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetcolor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('onIncrement not defined'),
  onDecrement: () => console.warn('onDecrement not defined'),
  onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
