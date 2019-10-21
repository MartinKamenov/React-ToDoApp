import React, { useState, useCallback } from 'react';
import Todo from './Todo';
import './css/todos.css'
import AddToDo from './AddTodo';
import TodoStatus from './TodoStatus';
import { useSelector, useDispatch } from 'react-redux';

// Check this medium example for refactoring using react hooks:
// https://itnext.io/how-to-use-redux-with-react-hooks-5422a7ceae6e

const ToDos = () => {
    const [addTodo, setTodo] = useState(
        {
            name: '',
            completed: false
        }
    );

    const todos = useSelector(state => state);
    const dispatch = useDispatch();

    // UseCallback uses react memo for optimizing performance
    // Check https://stackoverflow.com/questions/53159301/what-does-usecallback-usememo-do-in-react
    const add = useCallback(
        () => dispatch({ type: 'Add', todo: addTodo }),
        // Subscribe to changes addTodo variable
        [dispatch, addTodo]
    );

    const remove = useCallback(
        (id) => dispatch({ type: 'Remove', id }),
        [dispatch]
    );

    const update = useCallback(
        (id) => dispatch({ type: 'Update', id }),
        [dispatch]
    );

    const completeAll = useCallback(
        () => dispatch({ type: 'CompleteAll' }),
        [dispatch]
    );

    const incompleteAll = useCallback(
        () => dispatch({ type: 'IncompleteAll' }),
        [dispatch]
    );

    const handleUpdateInputValue = ({ target: { value }}) => {
        setTodo({ ...addTodo, name: value });
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
                    onCompleteAll={completeAll}
                    onIncompleteAll={incompleteAll}
                    totalCount={todos.length}
                    completedPercent={getCompletedPercent()}
                    notCompletedPercent={getIncompletedPercent()}/>
            </div>
            <div className='nav-fragment'>
                <AddToDo onAdd={add}
                    addTodo={addTodo}
                    onChangedInputValue={handleUpdateInputValue} 
                    onChangedCheckbox={handleUpdateCheckboxValue}
                    completed={addTodo.completed}/>
            </div>
            <div className='nav-fragment'>
                <h2 className='header center'>Current Todos</h2>
                {todos.map((t, i) => 
                    <div key={i} className='center'>
                        <Todo todo={t} id={i} onChange={update}
                        todoStatus={showStatusOfTodo(i)} onDelete={() => remove(i)}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ToDos;
