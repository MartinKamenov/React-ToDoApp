import React, { Component } from 'react';

const Todo = (props) => {
    return (
        <div className='todo'>
            <span className='m-2 status_changer' onClick={() => props.onChange(props.id)}>
                {props.todo.name}
            </span>
            {props.children}
            <button className="delete-btn btn btn-danger" onClick={() => props.onDelete(props.id)}>&times;</button>
        </div>
     );
}
 
export default Todo;