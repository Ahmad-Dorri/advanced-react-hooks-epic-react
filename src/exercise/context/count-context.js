import * as React from 'react'

const CountContext = React.createContext()

const CountContextProvider = ({children}) => {
  const [count, setCount] = React.useState(0)
  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be rendered within the CountContextProvider')
  }
  return context
}

export {CountContextProvider, useCount}
