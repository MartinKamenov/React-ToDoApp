import React from 'react';

const TodoStatus = (props) => {
	return (
		<div className="m-2 center">
			<h2 className="m-2 header center">Status</h2>
			<div className="center">Total count: {props.totalCount}</div>
			<div className="percent-visualizer">
				<span className={ props.completedPercent.classList }
					style={{ width: props.completedPercent.percent  }}>
					Completed: { props.completedPercent.percent }
				</span>
				<span className={ props.notCompletedPercent.classList }
					style={{ width: props.notCompletedPercent.percent }}>
					Not completed: { props.notCompletedPercent.percent }
				</span>
			</div>
			<div>
				<button onClick={props.onCompleteAll} className="m-2 btn btn-success">Completed</button>
				<button onClick={props.onIncompleteAll} className="m-2 btn btn-danger">Incompleted</button>
			</div>
		</div>
	);
};
 
export default TodoStatus;
