import React from 'react';

const AddTodo = (props) => {
    return ( 
        <div className="form-group col-xs-2 nav-fragment center">
            <div className="col-md-6">
                <h2 className="m-2">Add new Todo</h2>
                <input className="m-2 todo-input" value={props.addTodo.name} 
                    onChange={(ev) =>props.onChangedInputValue(ev)}
                    placeholder="Enter name" type="text"/>
                <input className="m-1 checkbox" type="checkbox" 
                    onChange={props.onChangedCheckbox} checked={props.addTodo.completed}/>
                <button className="m-2 btn btn-success" onClick={props.onAdd}>Add</button>
            </div>
        </div>
    );
}
 
export default AddTodo;
