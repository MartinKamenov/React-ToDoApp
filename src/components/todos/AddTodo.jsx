import React from 'react';

const AddTodo = (props) => {
	return ( 
		<div className="center">
			<h2>Add new Todo</h2>
			<br/>
			<div className="row">
				<input className="todo-input" value={props.addTodo.name} 
					onChange={(ev) =>props.onChangedInputValue(ev)}
					placeholder="Enter name" type="text"/>
				<input className="checkbox" type="checkbox" 
					onChange={props.onChangedCheckbox} checked={props.addTodo.completed}/>
				<button className="btn btn-success" onClick={props.onAdd}>Add</button>
			</div>
		</div>
	);
};
 
export default AddTodo;
