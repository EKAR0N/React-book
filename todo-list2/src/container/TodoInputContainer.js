import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodoInput from '../components/TodoInput';

// 액션 생성 함수들 한번에 불러옴
import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {
  id = 1;

  getId = () => {
    this.id += 1;
    return this.id;
  };

  handleChange = e => {
    const { value } = e.target
    const { InputActions } = this.props;
    InputActions.setInput(value);
  };

  handleInsert = () => {
    const { InputActions, TodosActions, value } = this.props;
    const todo = {
      id: this.getId(),
      text: value,
      done: false
    };
    TodosActions.insert(todo);
    InputActions.setInput('') // input 초기화
  };

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;
    return (
      <TodoInput
        onChange={handleChange}
        onInsert={handleInsert}
        value={value}
      />
    );
  }
}

export default connect(
  (state) => ({
    value: state.input.get('value')
  }), // mapStateToProps
  (dispatch) => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
  }) // mapDispatchToProps
)(TodoInputContainer);
