import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './AppRoute';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(todos = [
	{ name: 'Create To Do app', completed: false },
	{ name: 'Buy food', completed: false },
	{ name: 'Feed the cat', completed: false }
], action) {
	switch (action.type) {
		case 'Add':
			if(!action.todo || !action.todo.name) {
				return [...todos];
			}
			todos.push(Object.assign({}, action.todo));
			return [...todos];
		case 'Remove':
			todos.splice(action.id, 1);
			return [...todos];
		case 'Update':
			todos[action.id].completed = !todos[action.id].completed;
			return [...todos];
		case 'CompleteAll':
			todos.forEach(t => { t.completed = true; });
			return [...todos];
		case 'IncompleteAll':
			todos.forEach(t => { t.completed = false; });
			return [...todos];
		default:
			return [...todos];
	}
}

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<AppRoute />
	</Provider>, 
	document.getElementById('root'));
