import React from 'react';
import PropTypes from 'prop-types';

const TodoStatus = (props) => {
	return (
		<div className="center">
			<h2 className="header center">Status</h2>
			<div className="center">Total count: {props.totalCount}</div>
			<div className="percent-visualizer inner-content center-child">
				<span className={ props.completedPercent.classList }
					style={{ width: props.completedPercent.percent  }}>
					Completed: { props.completedPercent.percent }
				</span>
				<span className={ props.notCompletedPercent.classList }
					style={{ width: props.notCompletedPercent.percent }}>
					Not completed: { props.notCompletedPercent.percent }
				</span>
			</div>
			<div className="inner-content">
				<button onClick={props.onCompleteAll} className="m-2 btn btn-success">Completed</button>
				<button onClick={props.onIncompleteAll} className="m-2 btn btn-danger">Incompleted</button>
			</div>
		</div>
	);
};

TodoStatus.propTypes = {
	totalCount: PropTypes.number.isRequired,
	completedPercent: PropTypes.string.isRequired,
	notCompletedPercent: PropTypes.string.isRequired,
	onCompleteAll: PropTypes.func.isRequired,
	onIncompleteAll: PropTypes.func.isRequired
};
 
export default TodoStatus;
