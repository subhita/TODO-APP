import React, { Component } from 'react';
import { TodoForm } from './TodoForm';
import './index.css';

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
        <div className="to-do-app">
        <ul>
            {this.state.todos.map(todo =>
            <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete} />{todo.name}
            </li>
            )}
            </ul>
      </div>       
      </div>
    );
  }
}

export default ToDos;
