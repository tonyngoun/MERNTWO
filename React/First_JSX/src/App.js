import './App.css';
import React from 'react';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <p>Things I need to do:</p>
      <li key="A">Learn React</li>
      <li key="B">Climb Mt. Everest</li>
      <li key="C">Run a marathon</li>
      <li key="D">Think about ideas for Project and Algo class</li>
    </div>
  );
}
}

export default App;
