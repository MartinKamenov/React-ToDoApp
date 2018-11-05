import React, { Component } from 'react';

class AddToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            completed: false
        };
    }

    updateInputValue = evt => {
        this.setState({
            inputValue: evt.target.value
        });
      }

    render() { 
        return ( 
        <div className="form-group col-xs-2 nav-fragment">
            <h2 className="m-2">Add ToDo</h2>
            <input className="m-2 todo-input" value={this.state.inputValue} onChange={this.updateInputValue} placeholder="Enter name" type="text"/>
            <input className="m-1 checkbox" type="checkbox"/>
            <button className="m-2 btn btn-success" onClick={() => this.props.onAdd({
                name: this.state.inputValue, completed: this.state.completed
            })}>Add</button>
        </div> 
        );
    }
}
 
export default AddToDo;