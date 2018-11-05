import React, { Component } from 'react';
import Todo from './todo';
import './css/todos.css'
import AddToDo from './addTodo';

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

    handleAdd = (name) => {
        const newTodo = {name};
        this.setState({ todos: this.state.todos.push(newTodo) });
    }
    render() { 
        return ( 
            <div>
                <h1 className="m-2 header">Tasks App</h1>
                <AddToDo onAdd={this.handleAdd}/>
                <div className="nav-fragment">
                    <h2 className="m-2 header">Current Todos</h2>
                    {this.state.todos.map((t, i) => 
                        <Todo key={i} todo={t} id={i} onChange={this.handleChange} 
                        children={this.showStatusOfTodo(i)} onDelete={this.handleDelete}/>
                    )}
                </div>
            </div>
        );
    }
}
 
export default ToDos;