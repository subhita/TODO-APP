import React, { Component } from 'react';
import { TodoForm } from './TodoForm';
import './index.css';
import { TodoList } from './TodoList';

class ToDos extends Component {
    constructor() {
        super() 
        this.state = {
            todos: [
                {id:1, name:'Learn JSX', isComplete: true},
                {id:2, name:'Build an Awesome app', isComplete: false},
                {id:3, name:'Ship It', isComplete: false}
            ],
            currentTodo: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange (e) {
        this.setState({
            currentTodo: e.target.value
        })
    }

  render() {
    return (
      <div className="to-do-app">
        <TodoForm handleInputChange={this.handleInputChange}
        currentTodo={this.state.currentTodo}
        />
        <TodoList todos={this.state.todos} />     
      </div>
    );
  }
}

export default ToDos;
