import * as React from "react";
import "./App.css";
import Profile from "./components/Profile";
import TodoTemplate from './components/TodoTemplate';
import TodoInput from "./components/TodoInput";
import TodoList from './components/TodoList';

interface Props {}

interface Todos {
  id: number;
  text: string;
  done: boolean;
}

interface State {
  count: number;
  input: string;
  todos: Todos[];
}

class App extends React.Component<Props, State> {
  state: State = {
    count: 0,
    input: '',
    todos: [
      {
        id: 0,
        text: 'First Todo',
        done: false,
      },
    ],
  };

  id = 1;

  handleIncrement = (): void => {
    this.setState(({ count }) => ({
      count: (count += 1)
    }));
  };

  handleDecrement = (): void => {
    this.setState(({ count }) => ({
      count: (count -= 1)
    }));
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    this.setState(({ input }) => ({
      input: value
    }))
  }

  handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    this.setState(({ input, todos }) => ({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        done: false,
      }),
    }));

    console.log(this.state);
  }

  handleDone = (id: number): void => {
    const { todos } = this.state;

    this.setState(({ todos }) => ({
      todos: [
        ...todos,

      ]     
    }))
  }

  handleRemove = (id: number): void => {
    this.setState(({ todos }) => ({
      todos: [
        ...todos,
      ]
    }))
  }

  render() {
    const { handleIncrement, handleDecrement, handleChange, handleClick, handleDone, handleRemove } = this;
    const { input, todos, count } = this.state;
    return (
      <div className="App">
        <Profile name="Choi Min Gyu" age={18} job="Student" />
        <div>
          <h1>{count}</h1>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <TodoTemplate>
            <TodoInput handleChange={handleChange} handleClick={handleClick} value={input} />
            <TodoList todos={todos} handleDone={handleDone} handleRemove={handleRemove} />
          </TodoTemplate>
        </div>
      </div>
    );
  }
}

export default App;
