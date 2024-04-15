import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteAsync, fetchAsync } from "./cartSlice";
import styles from "./Cart.module.css";


const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className={styles["cart-items"]}>
      <h4>My Cart</h4>
      {items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        items.map((item) => (
          <div className={styles["cart-item"]} key={item.id}>
            <div className={styles["cart-item-details"]}>
              <img src={item.product_image} alt="" />
              <p>Product Name: {item.product_name}</p>
              <p>Product Description: {item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity in Stock: {item.quantity}</p>
              <p>Cart Id: {item.id}</p>
              <p>Product Id: {item.product_id}</p>
              <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
