import React, { Component } from 'react';
import '../App.css';
import TodoForm from './TodoForm'
import ShowTodo from './ShowTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <ShowTodo />
      </div>
    );
  }
}

export default App;
