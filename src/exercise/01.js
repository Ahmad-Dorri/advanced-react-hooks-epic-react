// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import useCounter, {CountAction} from './hooks/useCounter'

function Counter({initialCount = 0, step = 2}) {
  const [count, dispatch] = useCounter(initialCount)
  const increment = () => dispatch({type: CountAction.INCREMENT, payload: step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
