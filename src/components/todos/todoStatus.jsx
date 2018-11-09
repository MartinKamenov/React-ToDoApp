import React from 'react';

const TodoStatus = (props) => {
    return ( 
        <div className="nav-fragment">
            <h2 className="m-2 header">Status</h2>
            <div className="m-2">
                <div>Total count: {props.totalCount}</div>
                <div className="percent-visualizer col-md-6">
                    <span className={ props.completedPercent.classList }
                        style={{ width: props.completedPercent.percent  }}>
                        Completed: { props.completedPercent.percent }
                    </span>
                    <span className={ props.notCompletedPercent.classList }
                        style={{ width: props.notCompletedPercent.percent }}>
                        Not&nbsp;completed: { props.notCompletedPercent.percent }
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default TodoStatus;