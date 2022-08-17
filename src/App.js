import React, {useState, useEffect} from 'react'
import primeNumberSumCalculator from './lib/prime_numbers';
import { debounce } from 'lodash';

import './App.css';

function App() {
  const [input,setInput] = useState(0);
  const [output,setOutput] = useState(0);
  const [waiting,setWaiting] = useState(false);
  const calculateSum = debounce((value) => {
    if(value >= 50){
      let promise = new Promise((res) => {
        res(primeNumberSumCalculator(value))
        console.log('here')
      })
      promise.then((res) => {
        setOutput(res)
        setWaiting(false)
      })
    }else{
      setOutput(primeNumberSumCalculator(value))
    }
    
  },3000);

  const wait = debounce((value) => {
    if(value >= 50){
      setWaiting(true)
    }
  },2000);

  useEffect(() => {
    calculateSum.cancel()
  },[calculateSum])
  return (
    <div className="App">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          wait(e.target.value)
          calculateSum(e.target.value)
        }}
        type='number'
        disabled={waiting}
      />
      <div>
        {output}
      </div>
      <div>
        {waiting?"Calculating result":""}
      </div>
    </div>
  );
}
export default App;
