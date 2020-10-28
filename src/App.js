import React, { useState } from 'react';
import './App.css';


function Button(props) {
  return (
    <button onClick={() => props.handleState(props.value)}>
      {props.text}
    </button>);
}


function App() {
  const [counter, setCounter] = useState(0);

  function handleState(setState) {
    return function(state) {
      return function(value) {
        return setState(state + value);
      }
    }
  };

  const setCounterState = handleState(setCounter)(counter);

  return (
    <div className="App">
      <p>Counter: {counter}</p>

      <Button
        text='Add 1 to counter'
        value={1}
        handleState={setCounterState}
      />
    </div>
  );
}

export default App;
