import React, { Component } from 'react';

const Todo = (props) => {
    console.log(props);
    return (
        <div>
            <span className='m-2'>
                {props.todo.name}
            </span>
            <input type='checkbox' onClick={() => props.onChange(props.id)}></input>
        </div>
     );
}
 
export default Todo;