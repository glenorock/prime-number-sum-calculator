import React, {useState} from 'react'
import primeNumberSumCalculator from './lib/prime_numbers';
import './App.css';

function App() {
  const [state,setState] = useState({
    input: 0,
    output: 0
  })

  return (
    <div className="App">
      <input
        value={state.input}
        onChange={(e) => {
          setState({
            input: e.target.value,
            output: primeNumberSumCalculator(e.target.value)
          })
        }}
        type='number'
      />
      <div>
        {state.output}
      </div>
    </div>
  );
}

export default App;
