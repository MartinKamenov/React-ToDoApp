import React, { Component } from 'react';
import Todo from './todo';

class ToDos extends Component {
    state = { 
        todos: [
            { name: 'Create To Do app', completed: false },
            { name: 'Buy food', completed: false },
            { name: 'Feed the cat', completed: false }
        ]
    }
    render() { 
        return ( 
            <div>
                <h1>Current tasks</h1>
                {this.state.todos.map(t => 
                    <Todo todo={t}/>
                )}
            </div>
        );
    }
}
 
export default ToDos;