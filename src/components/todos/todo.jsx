import React, { Component } from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            <span className='m-2'>
                {todo.name}
            </span>
            <input type='checkbox'></input>
        </div>
     );
}
 
export default Todo;