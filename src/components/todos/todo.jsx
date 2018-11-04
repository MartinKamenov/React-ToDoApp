import React, { Component } from 'react';

const Todo = (props) => {
    console.log(props);
    return (
        <div className='todo'>
            <span className='m-2 status_changer' onClick={() => props.onChange(props.id)}>
                {props.todo.name}
            </span>
            {props.children}
        </div>
     );
}
 
export default Todo;