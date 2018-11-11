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
            <div className="col-md-6" style={{ textAlignment: 'center'}}>
                <button onClick={props.onCompleteAll} className="m-2 btn btn-success">Completed</button>
                <button onClick={props.onIncompleteAll} className="m-2 btn btn-danger">Incompleted</button>
            </div>
        </div>
    );
}
 
export default TodoStatus;
