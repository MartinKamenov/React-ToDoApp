import React from 'react';
import PropTyes from 'prop-types';

const AddTodo = (props) => {
	return ( 
		<div className="center">
			<h2>Add new Todo</h2>
			<br/>
			<div className="row">
				<input className="todo-input col-md-4" value={props.addTodo.name} 
					onChange={(ev) =>props.onChangedInputValue(ev)}
					placeholder="Enter name" type="text"/>
				<div className="col-md-4">
					<label style={{marginRight: '10px'}}>Status: </label>
					<input className="checkbox " type="checkbox"
						onChange={props.onChangedCheckbox} checked={props.addTodo.completed}/>
				</div>
				<button className="btn btn-success col-md-4" onClick={props.onAdd}>Add</button>
			</div>
		</div>
	);
};

AddTodo.propTypes = {
	addTodo: PropTyes.shape({
		name: PropTyes.string.isRequired,
		completed: PropTyes.bool.isRequired
	}),
	onChangedInputValue: PropTyes.func.isRequired,
	onChangedCheckbox: PropTyes.func.isRequired,
	onAdd: PropTyes.func.isRequired
};
 
export default AddTodo;
