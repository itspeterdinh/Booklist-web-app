import React from 'react'
import { AppContext } from './AppContext'
function AppProvider(props) {
    let Provider = AppContext.Provider
    let children = props.children
  return (
    <Provider value={props.data}>
        {children}
    </Provider>
  )
}

export default AppProvider;