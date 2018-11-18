import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
	return (
		<div className='inner-content row todo'>
			<span className='status_changer col-sm-4 center' onClick={() => props.onChange(props.id)}>
				{props.todo.name}
			</span>
			<span className={'col-sm-4 center ' + (props.todoStatus.classList)}>{props.todoStatus.status}</span>
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
	todoStatus: PropTypes.shape({
		classList: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired
	}).isRequired,
	onChange: PropTypes.func.isRequired
};

export default Todo;
