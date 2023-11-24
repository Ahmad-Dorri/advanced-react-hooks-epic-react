import * as React from 'react'

export const CountAction = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

function countReducer(state, action) {
  switch (action.type) {
    case CountAction.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    case CountAction.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      }

    default:
      throw new Error(`unhandled action.type: ${action.type}`)
  }
}

function init(initial) {
  return {
    count: initial,
  }
}

function useCounter(initialCount) {
  const [{count}, dispatch] = React.useReducer(countReducer, initialCount, init)
  return [count, dispatch]
}

export default useCounter
