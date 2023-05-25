import React from 'react'
import { useState } from 'react'

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  console.log(counter)
  console.log(setCounter)

  function changeColorDecrease(){
    document.getElementById('number').style.color = 'var(--3)'
    setCounter(counter - 1)
  }

  function changeColorReset(){
    document.getElementById('number').style.color = 'var(--4)'
    setCounter(0)
  }

  function changeColorIncrease(){
    document.getElementById('number').style.color = 'var(--5)'
    setCounter(counter + 1)
  }

  return (
    <div className='counter body'>
      <div className='container-text'>
        <h1 className='title'>Counter</h1>
        <span className='number' id='number'>{counter}</span>
      </div>

      <div className='buttonsCounter'>
        <button onClick={changeColorDecrease} >decrease</button>

        <button onClick={changeColorReset} >reset</button>

        <button onClick={changeColorIncrease} >increase</button>
      </div>
    </div>
  );
}