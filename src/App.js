import React, { Component } from 'react';
import NavBar from './components/navigationBar/NavBar';
import ToDos from './components/todos/todos';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar/>
        <ToDos/>
      </div>
    );
  }
}

export default App;
