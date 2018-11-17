import React from 'react';
// import PropTypes from 'prop-types';

const Todo = (props) => {
	return (
		<div className='inner-content row'>
			<span className='status_changer col-md-4 center' onClick={() => props.onChange(props.id)}>
				{props.todo.name}
			</span>
			{props.children}
			<div className="col-md-4 center">
				<button className="delete-btn btn btn-danger"
					onClick={() => props.onDelete(props.id)}>&times;
				</button>
			</div>
		</div>
	);
};

/*Todo.propTypes = {
	todo: PropTypes.object.isRequired,
	children: PropTypes.node.isRequired,
	onDelete: PropTypes.func
};*/

export default Todo;
