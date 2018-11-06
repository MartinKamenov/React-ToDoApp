import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe("Testing", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should pass', () => {
    expect(1 + 1).toBe(2);
  });

  it('should fail', () => {
    expect(1 + 1).toBe(3);
  });
})