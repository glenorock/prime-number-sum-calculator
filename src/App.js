import React, {useState, useEffect} from 'react'
import primeNumberSumCalculator from './lib/prime_numbers';
import { debounce } from 'lodash';

import './App.css';

function App() {
  const [input,setInput] = useState(0);
  const [output,setOutput] = useState(0);
  
  const calculateSum = debounce((value) => {
    setOutput(primeNumberSumCalculator(value))
  },3000);

  useEffect(() => {
    calculateSum.cancel()
  },[calculateSum])
  return (
    <div className="App">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          calculateSum(e.target.value)
        }}
        type='number'
      />
      <div>
        {output}
      </div>
    </div>
  );
}

export default App;
