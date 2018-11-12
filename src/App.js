import React, { Component } from 'react';
import ToDos from './components/todos/Todos';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDos/>
      </div>
    );
  }
}

export default App;
