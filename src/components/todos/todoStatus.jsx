import React from 'react';

const TodoStatus = (props) => {
    return ( 
        <div className="nav-fragment">
            <h2 className="m-2 header">Status</h2>
            <div className="m-2">
                <div>Total count: {props.totalCount}</div>
                <div className="percent-visualizer">
                    <span className="completed-percenteger"
                        style={{ width: props.completedPercent+'%'  }}>Completed: {props.completedPercent}%</span>
                    <span className="incompleted-percenteger"
                        style={{ width: props.notCompletedPercent+'%' }}>Not completed: {props.notCompletedPercent}%</span>
                </div>
            </div>
        </div>
    );
}
 
export default TodoStatus;