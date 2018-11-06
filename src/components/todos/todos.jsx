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
        const classList = "m-2 " + (completed ? "completed" : "incompleted");
        const status = this.state.todos[id].completed ? "Completed" : "Not completed";
        return <span className={classList}>{status}</span>;
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

    handleAdd = (state) => {
        const newTodo = state;
        const todos = this.state.todos;
        if(!newTodo.name) {
            return;
        }
        todos.push(newTodo);
        this.setState({ todos: todos });
    }
    render() { 
        return ( 
            <div className="container">
                <h1 className="m-2 header">Tasks App</h1>
                <AddToDo onAdd={this.handleAdd} inputValue='' completed={true}/>
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