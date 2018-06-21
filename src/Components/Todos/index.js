import React, { Component } from 'react';
import { TodoForm } from './TodoForm';
import './index.css';
import { TodoList } from './TodoList';
import {addTodo, generateId} from './../../lib/todoHelpers';
import {getAll, create} from './../../lib/TodoAPI';

class ToDos extends Component {
    state = {
        todos: [],
        currentTodo: ''
    }

    componentDidMount() {
        getAll()
        .then(todos => this.setState({todos}))
    }

handleSubmit = (e) => {
        e.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete:false}
    const updateTodos = addTodo(this.state.todos, newTodo)
    this.setState({
        todos: updateTodos,
        currentTodo: ''
    })
    create(newTodo)
    .then(() => console.log('todo added'))
}

handleEmptySubmit = (e) => {
    e.preventDefault()
    this.setState({
        errorMessage: 'please supply a todo'
    })
}


    handleInputChange = (e) => {
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
