import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
	return (
		<div className='inner-content row'>
			<span className='status_changer col-sm-4 center' onClick={() => props.onChange(props.id)}>
				{props.todo.name}
			</span>
			<span className={'col-sm-4 center ' + (props.todoStatus.toLowerCase()) + props.todoStatus}>{props.todoStatus}</span>
			<div className="col-sm-4 center">
				<button className="delete-btn btn btn-danger"
					onClick={() => props.onDelete(props.id)}>&times;
				</button>
			</div>
		</div>
	);
};

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	todo: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	onDelete: PropTypes.func,
	todoStatus: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Todo;
