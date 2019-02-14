import * as React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';

interface TodosObj {
  id: number;
  text: string;
  done: boolean;
}

interface Props {
  todos: Array<TodosObj>;
  handleRemove(id: number): void;
  handleDone(id: number): void;
}

const TodoList: React.SFC<Props> = ({ todos, handleRemove, handleDone }) => {
  const todoList = todos.map((item, idx) => {
    return (
      <TodoItem
        key={idx}
        text={item.text}
        done={item.done}
        handleDone={() => handleDone(item.id)}
        handleRemove={() => handleRemove(item.id)}
      />
    );
  })
  return (
    <div>
      {todoList}
    </div>
  );
}

export default TodoList;
