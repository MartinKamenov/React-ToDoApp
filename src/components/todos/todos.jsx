import React, { Component } from 'react';
import Todo from './todo';
import './css/todos.css'

class ToDos extends Component {
    state = { 
        todos: [
            { name: 'Create To Do app', completed: false },
            { name: 'Buy food', completed: false },
            { name: 'Feed the cat', completed: false }
        ]
    }

    showStatusOfTodo(id) {
        const completed = this.state.todos[id].completed;
        console.log('here');
        if(completed) {
            return <span className='m-2 completed'>Completed</span>;
        } else {
            return <span className='m-2 incompleted'>Not completed</span>;
        }
    }

    handleChange = (id) => {
        const todos = this.state.todos;
        const todo = this.state.todos[id];
        todo.completed = !todo.completed;
        todos[id] = todo;
        this.setState({todos});
    }

    handleDelete = id => {
        const todos = this.state.todos.filter((t, i) => i !== id);
        this.setState({todos});
    }
    render() { 
        return ( 
            <div>
                <h1>Current tasks</h1>
                {this.state.todos.map((t, i) => 
                    <Todo key={i} todo={t} id={i} onChange={this.handleChange} 
                    children={this.showStatusOfTodo(i)} onDelete={this.handleDelete}/>
                )}
            </div>
        );
    }
}
 
export default ToDos;