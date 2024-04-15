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

  function handleChange(e,id){
    dispatch(updateAsync({id,change:{quantity:+e.target.value}}))

  }
  return (
    <div className={styles["cart-items"] }>
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
              <div className="quantity">
                Quantity:
                <select  value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>


              </div>
          

              <div style={{display:"flex",margin: "0rem 84rem", width:"20%"  }}>
                <button
                  onClick={() => dispatch(deleteAsync(item.id))}
                  style={{
                    width: "2rem",
                    color: "red",
                    backgroundColor: "black",
                    fontSize: "0.5rem",
                    margin:"2rem 0.5rem"
                  }}
                >
                  X
                </button>
                <button
                  onClick={() => dispatch(deleteAsync(item.id))}
                  style={{
                    width: "2rem",
                    color: "red",
                    backgroundColor: "black",
                    fontSize: "0.5rem",
                    margin:"2rem 0.5rem"
                    
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
