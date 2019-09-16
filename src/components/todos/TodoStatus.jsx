import React from 'react';
import PropTypes from 'prop-types';

const TodoStatus = ({
	totalCount,
	completedPercent,
	notCompletedPercent,
	onCompleteAll,
	onIncompleteAll
}) => (
	<div className="center">
		<h2 className="header center">Status</h2>
		<div className="center">Total count: {totalCount}</div>
		<div className="percent-visualizer inner-content center-child">
			<span className={ completedPercent.classList }
				style={{ width: completedPercent.percent  }}>
				Completed: { completedPercent.percent }
			</span>
			<span className={ notCompletedPercent.classList }
				style={{ width: notCompletedPercent.percent }}>
				Not completed: { notCompletedPercent.percent }
			</span>
		</div>
		<div className="inner-content">
			<button onClick={onCompleteAll} className="m-2 btn btn-success">Completed</button>
			<button onClick={onIncompleteAll} className="m-2 btn btn-danger">Incompleted</button>
		</div>
	</div>
);

TodoStatus.propTypes = {
	totalCount: PropTypes.number.isRequired,
	completedPercent: PropTypes.shape({
		classList: PropTypes.string.isRequired,
		percent: PropTypes.string.isRequired
	}).isRequired,
	notCompletedPercent: PropTypes.shape({
		classList: PropTypes.string.isRequired,
		percent: PropTypes.string.isRequired
	}).isRequired,
	onCompleteAll: PropTypes.func.isRequired,
	onIncompleteAll: PropTypes.func.isRequired
};
 
export default TodoStatus;
