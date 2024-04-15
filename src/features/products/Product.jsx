import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "./productSlice";
import { useEffect } from "react";
import styles from "./Product.module.css";
import { addAsync } from "../cart/cartSlice";

const Product = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location allowed", position)
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
      dispatch(fetchProduct());
    }, 2000);
  }, [dispatch]);

  return (
    <div className={styles["product-container"]}>
      <div>
        <span><b>In Stocks(Currently Available)</b></span>
      </div>
      {products.map((product) => (
        <div className={styles["product-item"]} key={product.product_id}>
          <img src={product.product_image} alt="" />
          <p>Product Name: {product.product_name}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity in Stock: {product.quantity_in_stock}</p>
          <button
            className={styles["cart-btn"]}
            onClick={() => dispatch(addAsync(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
