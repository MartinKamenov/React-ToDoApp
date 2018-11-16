import React from 'react';

const Todo = (props) => {
    return (
        <div className='todo col-md-6 row'>
            <span className='status_changer col-md-4 center' onClick={() => props.onChange(props.id)}>
                {props.todo.name}
            </span>
            {props.children}
            <div className="col-md-4 center">
                <button className="delete-btn btn btn-danger"
                    onClick={() => props.onDelete(props.id)}>&times;
                </button>
            </div>
        </div>
     );
}
 
export default Todo;