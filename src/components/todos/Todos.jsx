import React, { useState } from 'react';
import Todo from './Todo';
import './css/todos.css'
import AddToDo from './AddTodo';
import TodoStatus from './TodoStatus';
import { connect } from 'react-redux';

const ToDos = ({add, remove, todos}) => {

    const [addTodo, setTodo] = useState(
        {
            name: '',
            completed: false
        }
    );

    const handleUpdateInputValue = (evt) => {
        setTodo({ ...addTodo, name: evt.target.value });
    }

    const handleUpdateCheckboxValue = () => {
        setTodo({ ...addTodo, completed: !addTodo.completed });
    }

    const showStatusOfTodo = (id) => {
        const completed = todos[id].completed;
        const classList = completed ? 'completed' : 'incompleted';
        const status = todos[id].completed ? 'Completed' : 'Not completed';
        return { classList, status };
    }

    const handleChange = id => {
        // const todosCopy = [...todos];
        // todosCopy[id].completed = !todosCopy[id].completed;
        // setTodos(todosCopy);
    }

    const handleDelete = (id) => {
        remove(id);
    }

    const handleAdd = () => {
        add(addTodo);
    }

    const handleCompleteAll = () => {
        // const todosCopy = [...todos];
        // todosCopy.forEach(t => t.completed=true);
        // setTodos(todosCopy);
    }

    const handleIncompleteAll = () => {
        // const todosCopy = [...todos];
        // todosCopy.forEach(t => t.completed = false);
        // setTodos(todosCopy);
    }

    const getCompletedPercent = () => {
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

    const getIncompletedPercent = () => {
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

    return (
        <div className='container'>
            <h1 className='header center'>Tasks App</h1>
            <div className='nav-fragment'>
                <TodoStatus
                    onCompleteAll={handleCompleteAll}
                    onIncompleteAll={handleIncompleteAll}
                    totalCount={todos.length}
                    completedPercent={getCompletedPercent()}
                    notCompletedPercent={getIncompletedPercent()}/>
            </div>
            <div className='nav-fragment'>
                <AddToDo onAdd={handleAdd}
                    addTodo={addTodo}
                    onChangedInputValue={handleUpdateInputValue} 
                    onChangedCheckbox={handleUpdateCheckboxValue}
                    completed={addTodo.completed}/>
            </div>
            <div className='nav-fragment'>
                <h2 className='header center'>Current Todos</h2>
                {todos.map((t, i) => 
                    <div key={i} className='center'>
                        <Todo todo={t} id={i} onChange={handleChange} 
                        todoStatus={showStatusOfTodo(i)} onDelete={handleDelete}/>
                    </div>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return ({
    todos: state
})};
  
  // Dispatch to props
const mapDispatchToProps = dispatch => ({
    add: (todo) => (dispatch({ type: 'Add', todo })),
    remove: (id) => (dispatch({ type: 'Remove', id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
