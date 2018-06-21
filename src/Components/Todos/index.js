import React, { Component } from 'react';
import './index.css';

class ToDos extends Component {
    constructor() {
        super() 
        this.state = {
            todos: [
                {id:1, name:'Learn JSX', isComplete: true},
                {id:2, name:'Build an Awesome app', isComplete: false},
                {id:3, name:'Ship It', isComplete: false}
            ]
        }
    }
  render() {
    return (
      <div className="to-do-app">
        <form>
            <input type="text" />
            </form> 
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
