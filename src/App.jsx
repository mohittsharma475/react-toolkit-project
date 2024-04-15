
import { useState } from "react"
import Cart from "./features/cart/Cart"
import Product from "./features/products/Product"
import {useSelector} from  "react-redux"


function App() {

  const items = useSelector((state)=>state.cart.items);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
    <button onClick={()=>setShowCart(!showCart)}>Cart [{items.length}]</button>
    {showCart? <Cart/>: <Product/>}
   
    </>
  )
}

export default App
