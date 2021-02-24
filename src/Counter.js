import React, { useReducer } from 'react'
import Increment from './Count'



const initFunc = (initialCount) => {
    // if (initialCount !== 0) {
    //     initialCount=+0
    // }
  return {count: initialCount};
}


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
      case 'reset':
          //   return initFunc(action.payload);
          return { count: action.payload };
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
     const [state, dispatch] = useReducer(reducer, initialCount, initFunc);
  return (
      <>
        <Increment count={state.count} dispatch={() => dispatch({type: 'increment'})}/>
      
      
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
              Reset
      </button>
          {initialCount === 0 ? <p>Click on the counter</p> : false}
    </>
  );
}

export default Counter;


