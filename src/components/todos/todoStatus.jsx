import React from 'react';

const TodoStatus = (props) => {
    return ( 
        <div className="nav-fragment">
            <span>Total count: {props.totalCount}</span>
            <span>Completed: {props.completedPercent}</span>
            <span>Not completed: {props.notCompletedPercent}</span>
        </div>
    );
}
 
export default TodoStatus;