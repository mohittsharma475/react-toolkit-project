import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteAsync, fetchAsync, updateAsync } from "./cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]); // Include dispatch in the dependency array

  function handleChange(e, id) {
    dispatch(updateAsync({ id, change: { quantity: +e.target.value } }));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Cart</h2>
      {items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        items.map((item) => (
          <div className={styles.cartItem} key={item.id}>
            <img src={item.product_image} alt="" className={styles.image} />
            <div className={styles.details}>
              <h3 className={styles.productName}>{item.product_name}</h3>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>Price: ${item.price}</p>
              <p className={styles.quantityInStock}>
                Quantity in Stock: {item.quantity}
              </p>
              <div className={styles.quantity}>
                Quantity:
                <select
                  value={item.quantity}
                  onChange={(e) => handleChange(e, item.id)}
                  className={styles.select}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
            <div className={styles.actions}>
              <button
                onClick={() => dispatch(deleteAsync(item.id))}
                className={styles.deleteButton}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className={styles["total-amount"]}>
        Total Amount:{items.reduce((acc,curr)=>{
          acc += curr.price*curr.quantity
          return acc;
        },0)}
      </div>
    </div>
  );
};

export default Cart;
