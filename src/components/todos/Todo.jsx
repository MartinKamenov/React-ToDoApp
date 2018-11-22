import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => (
	<div className='inner-content row todo'>
		<div className="col-sm-4">
			<div className='todo-content status_changer center' onClick={() => props.onChange(props.id)}>
				{props.todo.name}
			</div>
		</div>
		<div className="col-sm-4">
			<div className={'todo-content center ' + (props.todoStatus.classList)}>
				{props.todoStatus.status}
			</div>
		</div>
		<div className="col-sm-4">
			<button className="delete-btn btn btn-danger"
				onClick={() => props.onDelete(props.id)}>&times;
			</button>
		</div>
	</div>
);

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
