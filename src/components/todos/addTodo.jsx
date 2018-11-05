import React, { Component } from 'react';

const AddToDo = (props) => {
    return (
        <div className="form-group col-xs-2 nav-fragment">
            <h2 className="m-2">Add ToDo</h2>
            <input className="m-2 todo-input" placeholder="Enter name" type="text"/>
            <input className="m-1 checkbox" type="checkbox"/>
            <button className="m-4 btn btn-success" onClick={props.onAdd}>Add</button>
        </div>
    );
}
 
export default AddToDo;