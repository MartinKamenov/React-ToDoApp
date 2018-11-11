import React, { Component } from 'react';
import NavBar from './components/navigationBar/NavBar';
import ToDos from './components/todos/Todos';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ToDos/>
      </div>
    );
  }
}

export default App;
