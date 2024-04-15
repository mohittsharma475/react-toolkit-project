import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./features/cart/Cart";
import Product from "./features/products/Product";
import "./App.css";

function App() {
  const items = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Shoplify</h1>
        <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
          Cart [{items.length}]
        </button>
      </header>
      <main className="main-content">
        {showCart ? <Cart /> : <Product />}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Shoplify Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
