import * as React from "react";
import "./App.css";
import Profile from "./components/Profile";
import TodoTemplate from "./components/TodoTemplate";
import TodoInput from "./components/TodoInput";
import TodoInputContainer from './container/TodoInputContainer';
import TodoListContainer from './container/TodoListContainer';
import TodoList from "./components/TodoList";
import CounterContainer from './container/CounterContainer';

interface Props {}

interface Todos {
  id: number;
  text: string;
  done: boolean;
}

interface State {
  input: string;
  todos: Todos[];
}

class App extends React.Component<Props, State> {
  state: State = {
    input: "",
    todos: [
      {
        id: 0,
        text: "First Todo",
        done: false
      }
    ]
  };

  id = 1;

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    this.setState(() => ({
      input: value
    }));
  };

  handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.setState(({ input, todos }) => ({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        done: false
      })
    }));

    console.log(this.state);
  };

  handleDone = (id: number): void => {
    const { todos } = this.state;
    const idx = todos.findIndex(item => item.id === id);
    const selectedItem = todos[idx];
    const nextItems = [...todos]; // 배열 내용을 복사

    const nextItem = {
      ...selectedItem,
      done: !selectedItem.done
    };

    nextItems[idx] = nextItem; // 교체 처리

    this.setState(({ todos }) => ({
      todos: nextItems,
    }));
  };

  handleRemove = (id: number): void => {
    this.setState(({ todos }) => ({
      todos: todos.filter(item => item.id != id)
    }));
  };

  render() {
    const {
      handleChange,
      handleClick,
      handleDone,
      handleRemove
    } = this;
    const { input, todos } = this.state;
    return (
      <div className="App">
        <Profile name="Choi Min Gyu" age={18} job="Student" />
        <div>
          <CounterContainer />
          <TodoTemplate>
            {/* <TodoInput
              handleChange={handleChange}
              handleClick={handleClick}
              value={input}
            />
            <TodoList
              todos={todos}
              handleDone={handleDone}
              handleRemove={handleRemove}
            /> */}
            <TodoInputContainer />
            <TodoListContainer />
          </TodoTemplate>
        </div>
      </div>
    );
  }
}

export default App;
