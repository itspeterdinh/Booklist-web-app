import React from 'react'
import { CartContext } from './CartContext'
function CartProvider(props) {
    let Provider = CartContext.Provider
    let children = props.children
  return (
    <Provider value={props.data}>
        {children}
    </Provider>
  )
}

export default CartProvider