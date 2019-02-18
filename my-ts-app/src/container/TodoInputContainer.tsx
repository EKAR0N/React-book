import * as React from 'react';
import TodoInput from '../components/TodoInput';
import { actionCreators as todoListActions, TodoItem } from "../store/modules/todoList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreState } from "../store/modules";

type Props = {
  input: string;
  todos: TodoItem[],
  TodoListActions: typeof todoListActions;
};

class TodoListContainer extends React.Component<Props> {

  handleChange = (e: React.FormEvent<HTMLInputElement>) : void => {
    const { value } = e.currentTarget;
    const { TodoListActions } = this.props;

    TodoListActions.changeInput(value);
  }

  handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { TodoListActions } = this.props;
    const { input } = this.props;

    TodoListActions.create(input);
  }

  // handleDone = (id: number): void => {
  //   const { TodoListActions } = this.props;

  //   TodoListActions.toggle(id);
  // }

  // handleRemove = (id: number): void => {
  //   const { TodoListActions } = this.props;

  //   TodoListActions.remove(id);
  // }

  render() {
    const { input } = this.props;
    const { handleChange, handleClick } = this;
    return (
      <TodoInput
        value={input}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    );
  };
};

const mapStateToProps = ({ todoListReducer }: StoreState) => ({
  todos: todoListReducer.todos,
  input: todoListReducer.input,
});

const mapDispatchToProps = (dispatch: any) => ({
  TodoListActions: bindActionCreators(todoListActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);

