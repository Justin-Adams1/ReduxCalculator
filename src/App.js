import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { subtract, add } from './reducers/valuesSlice'



function App() {
  const count = useSelector(state => state.value.value)
  const dispatch = useDispatch()


  return (
    <>
      <h1>Redux React Calculator!</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(add())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(subtract())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
