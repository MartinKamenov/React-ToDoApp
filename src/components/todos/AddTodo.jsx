import React from 'react';
import PropTyes from 'prop-types';

const AddTodo = ({ addTodo, onChangedInputValue, onChangedCheckbox, onAdd }) => ( 
	<div className="center">
		<h2>Add new Todo</h2>
		<br/>
		<div className="row todo">
			<input className="todo-input col-sm-4" value={ addTodo.name} 
				onChange={(ev) => onChangedInputValue(ev)}
				placeholder="Enter name" type="text"/>
			<div className="col-sm-4">
				<label style={{marginRight: '10px'}}>Status: </label>
				<input className="checkbox " type="checkbox"
					onChange={ onChangedCheckbox} checked={ addTodo.completed }/>
			</div>
			<button className="btn btn-success col-sm-4" onClick={ onAdd }>Add</button>
		</div>
	</div>
);

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
