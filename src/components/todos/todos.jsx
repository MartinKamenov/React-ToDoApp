import React, { Component } from 'react';
import Todo from './todo';

class ToDos extends Component {
    state = { 
        todos: [
            { name: 'Create To Do app', completed: false },
            { name: 'Buy food', completed: false },
            { name: 'Feed the cat', completed: false }
        ]
    }

    handleChange = (id) => {
        const todos = this.state.todos;
        const todo = this.state.todos[id];
        todo.completed = !todo.completed;
        todos[id] = todo;
        this.setState({todos});
    }
    render() { 
        return ( 
            <div>
                <h1>Current tasks</h1>
                {this.state.todos.map((t, i) => 
                    <Todo key={i} todo={t} id={i} onChange={this.handleChange}/>
                )}
            </div>
        );
    }
}
 
export default ToDos;