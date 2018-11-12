import React, { Component } from 'react';
import Todo from './Todo';
import './css/todos.css'
import AddToDo from './AddTodo';
import TodoStatus from './TodoStatus';

class ToDos extends Component {
    state = { 
        todos: [
            { name: 'Create To Do app', completed: false },
            { name: 'Buy food', completed: false },
            { name: 'Feed the cat', completed: false }
        ],
        addTodo: {
            name: '',
            completed: false
        }
    }

    handleUpdateInputValue = evt => {
        const addTodo = this.state.addTodo;
        addTodo.name = evt.target.value;
        this.setState({ addTodo });
    }

    handleUpdateCheckboxValue = () => {
        const addTodo = this.state.addTodo;
        addTodo.completed = !addTodo.completed;
        this.setState({ addTodo });
    }

    showStatusOfTodo(id) {
        const completed = this.state.todos[id].completed;
        const classList = "col-md-4 center " + (completed ? "completed" : "incompleted");
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

    handleAdd = () => {
        const newTodo = {
            name: this.state.addTodo.name, 
            completed: this.state.addTodo.completed
        };
        const todos = this.state.todos;
        if(!(newTodo.name)) {
            return;
        }
        todos.push(newTodo);
        this.setState({
            todos: todos,
            addTodo: {
                name: "",
                completed: false
            }
        });
    }

    handleCompleteAll = () => {
        const todos = this.state.todos;
        todos.forEach(t => t.completed=true);
        this.setState({todos});
    }

    handleIncompleteAll = () => {
        const todos = this.state.todos;
        todos.forEach(t => t.completed=false);
        this.setState({ todos });
    }

    getCompletedPercent() {
        const todos = this.state.todos;
        const completedTodos = todos.filter(t => t.completed).length;
        const percent = (( completedTodos / todos.length) * 100).toFixed(2);
        let classList = 'completed-percenteger';
        if(percent < 100) {
            classList += ' left-indicator';
        } else {
            classList += ' only-indicator';
        }
        classList += completedTodos ? '' : ' gone'; 
        return { percent: percent + '%', classList };
    }

    getIncompletedPercent() {
        const todos = this.state.todos;
        const incompletedTodos = todos.filter(t => !t.completed).length;
        const percent = ((incompletedTodos / todos.length) * 100).toFixed(2);
        let classList = 'incompleted-percenteger';
        if(percent < 100) {
            classList += ' right-indicator';
        } else {
            classList += ' only-indicator';
        }
        classList += incompletedTodos ? '' : ' gone'; 
        return { percent: percent + '%', classList };
    }

    render() { 
        return ( 
            <div className="container">
                <h1 className="m-2 header center">Tasks App</h1>
                <TodoStatus
                    onCompleteAll={this.handleCompleteAll}
                    onIncompleteAll={this.handleIncompleteAll}
                    totalCount={this.state.todos.length}
                    completedPercent={this.getCompletedPercent()}
                    notCompletedPercent={this.getIncompletedPercent()}/>
                <AddToDo onAdd={this.handleAdd}
                    addTodo={this.state.addTodo}
                    onChangedInputValue={this.handleUpdateInputValue} 
                    onChangedCheckbox={this.handleUpdateCheckboxValue}
                    completed={this.state.addTodo.completed}/>
                <div className="nav-fragment">
                    <h2 className="m-2 header center col-md-6">Current Todos</h2>
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
