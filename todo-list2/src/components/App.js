import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInputContainer from '../container/TodoInputContainer';
import TodoListContainer from '../container/TodoListContainer';

class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInputContainer />
        <TodoListContainer />
      </PageTemplate>
    );
  }
}

export default App;
