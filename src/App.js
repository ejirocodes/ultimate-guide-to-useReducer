import React, { useReducer } from 'react';
import './App.css';
// import { login } from './utils';
import Counter from './Counter';


// const initialState = { count: 1 }


// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 }
//     case 'decrement':
//       return { count: state.count - 1, action }
//     case 'reset':
//       return {count: state.count = 0}
//     default:
//      return { count: state.count  }
//   }
// }

// const init = () => ({count: 44})

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState, init)
  
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoading, showLoader] = useState(false);
  // const [error, setError] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   setError('');
  //   showLoader(true);

  //   try {
  //     await login({ username, password });
  //     setIsLoggedIn(true);
  //   } catch (error) {
  //     setError('Incorrect username or password!');
  //     showLoader(false);
  //     setUsername('');
  //     setPassword('');
  //   }
  // };


  return (
    <div className="App">
      <Counter initialCount={33}/>
      {/* Count: {state.count}
       <br />
       <br/>
       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
       <button onClick={(val) => dispatch({ type: 'decrement', payload: val})}>Decrement</button>
       <button onClick={() => dispatch({ type: 'reset'})}>Reset</button> */}
       {/* <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
          </>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <button className='submit' type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
      </div> */}
    </div>
  );
};
 
export default App;