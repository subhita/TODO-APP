import React from 'react';
import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

export const TodoList = (props) => {
    return (
    <div className="to-do-app">
        <ul>
            {props.todos.map(todo =>
                <TodoItem key={todo.id} {...todo} />
            )}
            </ul>
      </div>  
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}