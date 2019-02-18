import * as React from 'react';
import TodoList from '../components/TodoList'
import { actionCreators as todoListActions, TodoItem } from "../store/modules/todoList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreState } from "../store/modules";

type Props = {
  todos: TodoItem[],
  TodoListActions: typeof todoListActions;
};

class TodoListContainer extends React.Component<Props> {

  // handelChange = (e: React.FormEvent<HTMLInputElement>) : void => {
  //   const { value } = e.currentTarget;
  //   const { TodoListActions } = this.props;

  //   TodoListActions.changeInput(value);
  // }

  // handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();

  //   const { TodoListActions } = this.props;
  //   const { input } = this.props;

  //   TodoListActions.create(input);
  // }

  handleDone = (id: number): void => {
    const { TodoListActions } = this.props;

    TodoListActions.toggle(id);
  }

  handleRemove = (id: number): void => {
    const { TodoListActions } = this.props;

    TodoListActions.remove(id);
  }

  render() {
    const { todos } = this.props;
    const { handleDone, handleRemove } = this;
    return (
      <TodoList
        todos={todos}
        handleDone={handleDone}
        handleRemove={handleRemove}
      />
    );
  };
};

const mapStateToProps = ({ todoListReducer }: StoreState) => ({
  todos: todoListReducer.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
  TodoListActions: bindActionCreators(todoListActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
