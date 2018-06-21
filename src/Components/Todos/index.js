import React, { Component } from 'react';
import { TodoForm } from './TodoForm';
import './index.css';
import { TodoList } from './TodoList';
import {addTodo, generateId} from './../../lib/todoHelpers';

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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmptySubmit = this.handleEmptySubmit.bind(this)        
    }

handleSubmit(e) {
        e.preventDefault()
    const newId = generateId()
    const newTodo = {name: this.state.currentTodo, isComplete:false}
    const updateTodos = addTodo(this.state.todos, newTodo)
    this.setState({
        todos: updateTodos,
        currentTodo: ''
    })
}

handleEmptySubmit (e) {
    e.preventDefault()
    this.setState({
        errorMessage: 'please supply a todo'
    })
}


    handleInputChange (e) {
        this.setState({
            currentTodo: e.target.value
        })
    }

  render() {
      const submitHandler = this.state.currentTodo ? this.handleSubmit :this.handleEmptySubmit
    return (
      <div className="to-do-app">
      {this.state.errorMessage && <span>{this.state.errorMessage}</span>}
        <TodoForm handleInputChange={this.handleInputChange}
        currentTodo={this.state.currentTodo}
        handleSubmit={submitHandler}
        />
        <TodoList todos={this.state.todos} />     
      </div>
    );
  }
}

export default ToDos;
